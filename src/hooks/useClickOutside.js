import { useEffect, useRef } from 'react'

export default function useClickOutside(callback, listenCapturing = true) {
      const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      // ref.current is the modal window
      // the .contains method is accessible to any DOM elements
      // e.target is the event (a click in this case)
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [listenCapturing, callback]);

  return ref
}