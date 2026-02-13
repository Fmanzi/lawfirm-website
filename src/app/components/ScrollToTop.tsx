import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  return null;
}
