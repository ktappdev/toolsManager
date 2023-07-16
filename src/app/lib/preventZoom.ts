import { useEffect } from "react";

function usePreventZoom(scrollCheck = true, pinchCheck = true): void {
  useEffect(() => {
    const handlePinch = (e: TouchEvent) => {
      if (pinchCheck && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", handlePinch, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handlePinch);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCheck, pinchCheck]);
}

export default usePreventZoom;
