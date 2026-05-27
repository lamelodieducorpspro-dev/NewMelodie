"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const routeLabels = {
  "/": "Accueil",
  "/a-propos": "À propos",
  "/mon-accompagnement": "Mon accompagnement",
  "/sopk-alimentation-guadeloupe": "SOPK",
  "/endometriose-alimentation-guadeloupe": "Endométriose",
  "/menopause-alimentation-guadeloupe": "Ménopause",
  "/cours-yoga-bouillante-guadeloupe": "Yoga",
  "/tarifs": "Tarifs",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/cgv": "CGV",
  "/mentions-legales": "Mentions légales",
  "/politique-confidentialite": "Politique de confidentialité",
  "/politique-cookies": "Politique de cookies",
};

function getBreadcrumbItems(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ label: routeLabels["/"], href: "/" }];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = routeLabels[currentPath] || decodeURIComponent(segment).replace(/-/g, " ");
    items.push({ label, href: currentPath });
  }

  return items;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  // Don't show breadcrumbs on home page
  if (items.length <= 1) {
    return null;
  }

  return (
    <div className="container py-4">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
