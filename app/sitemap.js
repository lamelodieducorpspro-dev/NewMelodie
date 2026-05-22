import { SITE_BASE_URL } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/mon-accompagnement", priority: 0.95, changeFrequency: "monthly" },
    { path: "/sopk-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly" },
    { path: "/endometriose-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly" },
    { path: "/menopause-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly" },
    { path: "/cours-yoga-bouillante-guadeloupe", priority: 0.85, changeFrequency: "monthly" },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.75, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cgv", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politique-cookies", priority: 0.2, changeFrequency: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${SITE_BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
