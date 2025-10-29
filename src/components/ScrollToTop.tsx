import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls the window to the top on every route change.
 * It should be rendered inside the <BrowserRouter> component.
 */
const ScrollToTop = () => {
  // useLocation gives us access to the current location object, 
  // which changes every time a navigation occurs.
  const { pathname } = useLocation();

  // useEffect runs after every render, but we only want it to run 
  // when the 'pathname' changes (i.e., when we navigate).
  useEffect(() => {
    // Scrolls the window to the top of the page.
    window.scrollTo(0, 0); 
    // Using (0, 0) is the simplest and fastest way to get to the top.
    // We omit 'behavior: smooth' for quick, instant page loads, 
    // which is the standard expected behavior for a page navigation.
  }, [pathname]); // Reruns the effect only when the pathname changes

  // This component doesn't render any UI, it just handles the side effect.
  return null;
};

export default ScrollToTop;