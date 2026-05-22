"use client";

import { useEffect } from "react";

/**
 * Updates document title and meta tags for SPA pages.
 */
export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
      let og = document.querySelector('meta[property="og:description"]');
      if (og) og.setAttribute("content", description);
      let ogt = document.querySelector('meta[property="og:title"]');
      if (ogt && title) ogt.setAttribute("content", title);
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical]);

  return null;
}
