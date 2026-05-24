"use client";

import { useEffect, useRef } from "react";

/**
 * Loads the Elfsight platform script once and renders a widget container.
 * Used for the Google Reviews widget on the homepage.
 */
export default function ElfsightWidget({ appId, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = "elfsight-platform-js";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`elfsight-app-${appId} ${className}`}
      data-elfsight-app-lazy
      data-testid="elfsight-reviews"
    />
  );
}
