"use client";

import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, ADDRESS, INSTAGRAM, FACEBOOK, IMG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-forest text-[#F3EFE6] mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <img src={IMG.logo} alt="" className="w-12 h-12 rounded-full" />
            <span className="font-serif text-2xl text-white">La Mélodie du Corps</span>
          </div>
          <p className="text-sm leading-relaxed text-[#D5C8B5] mb-6">
            Apolline · Praticienne en nutrition holistique &amp; professeure de yoga.
            Accompagnement de la santé hormonale féminine en Guadeloupe et à distance.
          </p>
          <div className="flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" data-testid="footer-instagram"
              className="w-10 h-10 rounded-full border border-[#849974] flex items-center justify-center hover:bg-sage transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" data-testid="footer-facebook"
              className="w-10 h-10 rounded-full border border-[#849974] flex items-center justify-center hover:bg-sage transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="footer-whatsapp"
              className="w-10 h-10 rounded-full border border-[#849974] flex items-center justify-center hover:bg-sage transition">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-serif text-xl mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-[#D5C8B5]">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/accompagnement" className="hover:text-white">Accompagnement</Link></li>
            <li><Link href="/yoga" className="hover:text-white">Yoga</Link></li>
            <li><Link href="/tarifs" className="hover:text-white">Tarifs</Link></li>
            <li><Link href="/a-propos" className="hover:text-white">À propos</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Prendre RDV</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-serif text-xl mb-4">Spécialités</h4>
          <ul className="space-y-2 text-sm text-[#D5C8B5]">
            <li><Link href="/specialites/sopk" className="hover:text-white">SOPK</Link></li>
            <li><Link href="/specialites/endometriose" className="hover:text-white">Endométriose</Link></li>
            <li><Link href="/specialites/menopause" className="hover:text-white">Ménopause</Link></li>
            <li><Link href="/accompagnement" className="hover:text-white">Fatigue chronique</Link></li>
            <li><Link href="/accompagnement" className="hover:text-white">Digestion</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-serif text-xl mb-4">Légal</h4>
          <ul className="space-y-2 text-sm text-[#D5C8B5]">
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            <li><Link href="/cgv" className="hover:text-white">CGV</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link></li>
            <li><Link href="/politique-cookies" className="hover:text-white">Cookies</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-serif text-xl mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[#D5C8B5]">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 flex-shrink-0" />{ADDRESS}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white">{WHATSAPP_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#849974]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-[#D5C8B5]">
          <p>© {new Date().getFullYear()} La Mélodie du Corps · Tous droits réservés</p>
          <p className="italic">Mon accompagnement ne remplace pas un suivi médical.</p>
        </div>
      </div>
    </footer>
  );
}
