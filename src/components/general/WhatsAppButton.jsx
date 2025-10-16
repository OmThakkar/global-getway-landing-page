import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IdCard, MoveLeft, TicketsPlane } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("Unknown Location");
  const [step, setStep] = useState("initial"); // initial, nameInput
  const containerRef = useRef(null);

  // Get user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Using reverse geocoding API to get location name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            );
            const data = await response.json();
            const location =
              data.address.city ||
              data.address.town ||
              data.address.state ||
              data.address.country ||
              "Unknown Location";
            setUserLocation(location);
          } catch (error) {
            console.error("Error getting location:", error);
            setUserLocation("Unknown Location");
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setUserLocation("Unknown Location");
        },
      );
    }
  }, []);

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
        setSelectedOption(null);
        setUserName("");
        setStep("initial");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      // Reset state when closing
      setSelectedOption(null);
      setUserName("");
      setStep("initial");
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep("nameInput");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert("Please enter your name");
      return;
    }

    let messageBody = "";
    if (selectedOption === "tour") {
      messageBody = `Hello, this is ${userName} from ${userLocation} and want to know about tour packages`;
    } else if (selectedOption === "visa") {
      messageBody = `Hello, this is ${userName} from ${userLocation} and want to know about visa application`;
    }

    const whatsappUrl = `https://wa.me/917448158105?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, "_blank");

    // Reset and close
    setIsOpen(false);
    setSelectedOption(null);
    setUserName("");
    setStep("initial");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      )}
      <div
        ref={containerRef}
        className="fixed right-4 bottom-4 z-50 lg:right-6 lg:bottom-6"
      >
        {/* Popup Menu */}
        {isOpen && (
          <div className="animate-fade-in absolute right-0 bottom-14 w-68 rounded-xl bg-white p-4 shadow-sm lg:w-96">
            {step === "initial" && (
              <div className="flex flex-col gap-4">
                <span className="ps-1.5 text-base font-semibold">
                  How can we help you?
                </span>
                <button
                  onClick={() => handleOptionSelect("tour")}
                  className="flex flex-col items-start gap-1 rounded-lg border border-stone-200 px-4 py-2 text-left hover:bg-stone-50"
                >
                  <div className="flex items-center gap-2">
                    <TicketsPlane className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Enquire for Tour Packages
                    </span>
                  </div>
                  <span className="text-sm">
                    Get information about our tour packages
                  </span>
                </button>
                <button
                  onClick={() => handleOptionSelect("visa")}
                  className="flex flex-col items-start gap-1 rounded-lg border border-stone-200 px-4 py-2 text-left hover:bg-stone-50"
                >
                  <div className="flex items-center gap-2">
                    <IdCard className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Enquire for Visa Application
                    </span>
                  </div>
                  <span className="text-sm">
                    Get help with visa application process
                  </span>
                </button>
              </div>
            )}

            {step === "nameInput" && (
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStep("initial")}
                    className="rounded-lg border border-stone-200 p-1.5"
                  >
                    <MoveLeft className="h-3 w-3" />
                  </button>
                  <span className="font-semibold">
                    {selectedOption === "tour"
                      ? "Tour Packages Enquiry"
                      : "Visa Application Enquiry"}
                  </span>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-4"
                >
                  <div className="input-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>Your Location</label>
                    <input type="text" value={userLocation} readOnly />
                  </div>
                  <button
                    type="submit"
                    className="button primary-button self-end text-xs"
                  >
                    Send WhatsApp Message
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center justify-center rounded-full p-2.5 text-white transition-all duration-300 ease-in-out ${
            isOpen
              ? "bg-red-500 hover:bg-red-600"
              : "bg-[#25D366] hover:bg-[#25D366]/80"
          }`}
        >
          {isOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <FaWhatsapp className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
