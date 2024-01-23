import {
  useState,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from "react";

export default function useDisplay(
  element: RefObject<HTMLDivElement>,
  state: Dispatch<SetStateAction<boolean>>
) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (element.current !== null) {
      const elementPosition = element.current.offsetTop;
      if (elementPosition - 600 < scrollPosition) {
        state(true);
      }
    }
  }, [scrollPosition, element, state]);
}
