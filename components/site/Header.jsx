"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "@/components/site/NavLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { IMG } from "@/lib/constants";

const navItems = [
  { label: "Accueil", to: "/" },
  {
    label: "Mes spécialités",
    children: [
      { label: "SOPK", to: "/sopk-alimentation-guadeloupe" },
      { label: "Endométriose", to: "/endometriose-alimentation-guadeloupe" },
      { label: "Ménopause", to: "/menopause-alimentation-guadeloupe" },
    ],
  },
  { label: "Mon accompagnement", to: "/mon-accompagnement" },
  { label: "Yoga", to: "/cours-yoga-bouillante-guadeloupe" },
  { label: "Tarifs", to: "/tarifs" },
  { label: "FAQ", to: "/faq" },
  { label: "À propos", to: "/a-propos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [specOpen, setSpecOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-[#F9F6F0]/85 border-b border-[#E2DCD0]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" data-testid="header-logo" className="flex items-center gap-3 min-w-0">
          <img src={IMG.logo} alt="La Mélodie du Corps" className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover flex-shrink-0" />
          <span className="font-serif text-lg md:text-[1.35rem] leading-tight text-forest whitespace-nowrap md:whitespace-normal">
            La Mélodie <span className="md:block">du Corps</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setSpecOpen(true)}
                onMouseLeave={() => setSpecOpen(false)}
              >
                <button
                  data-testid="nav-specialites-trigger"
                  className="flex items-center gap-1 text-sm tracking-wide text-[#1A2421] hover:text-forest transition"
                >
                  {item.label} <ChevronDown className="w-4 h-4" />
                </button>
                {specOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56">
                    <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E2DCD0] overflow-hidden">
                      {item.children.map((c) => (
                        <NavLink
                          key={c.to}
                          href={c.to}
                          data-testid={`nav-sub-${c.label.toLowerCase()}`}
                          className="block px-5 py-3 text-sm text-[#1A2421] hover:bg-cream-2 hover:text-forest transition"
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                href={item.to}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition ${
                    isActive ? "text-forest font-medium" : "text-[#1A2421] hover:text-forest"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <Link href="/contact" data-testid="header-cta" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
          Prendre RDV
        </Link>

        <button
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-forest"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-[#E2DCD0]" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <div className="text-xs uppercase tracking-[0.2em] text-sage py-2">{item.label}</div>
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      href={c.to}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-sub-${c.label.toLowerCase()}`}
                      className="block pl-3 py-2 text-base text-[#1A2421]"
                    >
                      → {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="py-3 text-base text-[#1A2421] border-b border-[#E2DCD0]"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-cta"
              className="btn-primary mt-4 justify-center"
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
