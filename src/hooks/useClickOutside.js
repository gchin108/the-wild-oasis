import { useEffect, useRef } from 'react'

export default function useClickOutside(callback, listenCaputring = true) {
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

    document.addEventListener("click", handleClick, listenCaputring);

    return () => {
      document.removeEventListener("click", handleClick, listenCaputring);
    };
  }, [listenCaputring, callback]);

  return ref
}