import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top of the page
  }, [location]); // Dependency on location will trigger the effect when the route changes

  return null;
};

export default ScrollToTop;