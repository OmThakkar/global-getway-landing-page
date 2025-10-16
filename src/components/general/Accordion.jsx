import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
/**
 * Accordion component for displaying collapsible content sections.
 *
 * The Accordion component provides a flexible way to display expandable/collapsible
 * content sections. It supports single or multiple open items and customizable styling.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.items - Array of accordion items with id, question, and answer properties.
 * @param {boolean} [props.singleOpen=false] - Whether only one item can be open at a time.
 * @param {boolean} [props.defaultOpen=false] - Whether the first item should be open by default.
 * @param {'opened' | 'collapsible'} [props.type='collapsible'] - Type of accordion behavior.
 * @param {React.ReactNode|React.ComponentType} [props.openIcon] - Icon component or JSX element to show when item is open.
 * @param {React.ReactNode|React.ComponentType} [props.closeIcon] - Icon component or JSX element to show when item is closed.
 * @param {string} [props.className=""] - Additional Tailwind/utility classes to apply to the accordion container.
 * @param {string} [props.itemClassName=""] - Additional classes for each accordion item.
 * @param {string} [props.headerClassName=""] - Additional classes for accordion headers.
 * @param {string} [props.contentClassName=""] - Additional classes for accordion content.
 * @param {boolean} [props.showBorder=true] - Whether to show borders between items.
 * @param {boolean} [props.showShadow=false] - Whether to add shadow to accordion items.
 * @param {0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16} [props.itemGap=0] - Gap between accordion items (0=none, 1=gap-1, 2=gap-2, ..., 16=gap-16).
 *
 * @returns {JSX.Element} Rendered Accordion component.
 */
const Accordion = ({
  items = [],
  singleOpen = false,
  defaultOpen = false,
  type = "collapsible",
  openIcon,
  closeIcon,
  className = "",
  itemClassName = "",
  headerClassName = "",
  contentClassName = "",
  showBorder = true,
  showShadow = false,
  itemGap = 0,
}) => {
  // Initialize open items based on type and defaultOpen
  const getInitialOpenItems = () => {
    if (type === "opened") {
      // All items are open and cannot be closed
      return new Set(items.map((item) => item.id));
    }

    if (defaultOpen && items.length > 0) {
      return new Set([items[0].id]);
    }

    return new Set();
  };

  const [openItems, setOpenItems] = useState(getInitialOpenItems);

  /**
   * Handles toggling of accordion items
   * @param {string|number} itemId - The ID of the item to toggle
   */
  const handleToggle = (itemId) => {
    // If type is 'opened', items cannot be toggled closed
    if (type === "opened") {
      return;
    }

    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);

      if (singleOpen) {
        // Clear all open items first
        newOpenItems.clear();
        // Add the clicked item if it wasn't already open
        if (!prev.has(itemId)) {
          newOpenItems.add(itemId);
        }
      } else {
        // Toggle the clicked item
        if (newOpenItems.has(itemId)) {
          newOpenItems.delete(itemId);
        } else {
          newOpenItems.add(itemId);
        }
      }

      return newOpenItems;
    });
  };

  // Generate gap class based on itemGap prop
  const getGapClass = () => {
    if (itemGap === 0) return "";
    return `gap-${itemGap}`;
  };

  // Helper function to render icon - handles both JSX elements and component functions
  const renderIcon = (icon, isOpen) => {
    if (!icon) return null;

    // If it's a component function (has a $$typeof property when instantiated or is a function)
    if (typeof icon === "function") {
      const IconComponent = icon;
      return (
        <IconComponent className="h-4 w-4 transition-transform duration-200" />
      );
    }

    // If it's already a JSX element
    return icon;
  };

  // Default icons
  const defaultOpenIcon = (
    <ChevronUp className="h-4 w-4 transition-transform duration-200" />
  );
  const defaultCloseIcon = (
    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
  );

  if (!items || items.length === 0) {
    return (
      <div className={`py-4 text-center text-stone-500 ${className}`}>
        No accordion items to display
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col ${getGapClass()} ${className}`}
      role="tablist"
      aria-multiselectable={!singleOpen}
    >
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        const isClickable = type !== "opened";

        return (
          <div
            key={item.id}
            className={` ${showBorder && index > 0 ? "border-t border-stone-100" : ""} ${showShadow ? "shadow-sm" : ""} ${itemClassName} `}
          >
            {/* Header */}
            <button
              className={`flex w-full rounded-xl items-center justify-between gap-4 p-4 text-left ${isClickable ? "focus:outline-none" : "cursor-default"} ${showBorder ? "border border-stone-100" : ""} ${isOpen && showBorder ? "border-b-0 rounded-b-none" : ""} transition-colors duration-200 ${headerClassName} `}
              onClick={() => handleToggle(item.id)}
              disabled={!isClickable}
              role="tab"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
            >
              <span className="font-semibold text-stone-800">
                {item.question}
              </span>

              {isClickable && (
                <span className="flex-shrink-0">
                  {isOpen
                    ? renderIcon(openIcon, true) || defaultOpenIcon
                    : renderIcon(closeIcon, false) || defaultCloseIcon}
                </span>
              )}
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden  transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
              role="tabpanel"
              aria-labelledby={`accordion-header-${item.id}`}
              id={`accordion-content-${item.id}`}
            >
              <div
                className={`p-4 rounded-b-xl ${showBorder ? "border-r border-b border-l border-stone-100" : ""} ${contentClassName} `}
              >
                {typeof item.answer === "string" ? (
                  <p className="text-stone-700">{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
