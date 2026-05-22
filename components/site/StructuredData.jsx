"use client";

import { useEffect } from "react";

/**
 * Injects JSON-LD structured data into <head>.
 * data: a JS object that will be JSON.stringified.
 * id: unique id so we can clean up between pages.
 */
export default function StructuredData({ data, id = "structured-data" }) {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, [data, id]);
  return null;
}
