"use client";

import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { IMG } from "@/lib/constants";

const API = "/api";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exitShown")) return;

    const trigger = () => {
      if (sessionStorage.getItem("exitShown")) return;
      setOpen(true);
      sessionStorage.setItem("exitShown", "1");
    };

    const mouseHandler = (e) => {
      if (e.clientY <= 0) trigger();
    };

    const scrollHandler = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrolled > 0.55) trigger();
    };

    const mouseTimer = setTimeout(() => document.addEventListener("mouseleave", mouseHandler), 4000);
    const scrollTimer = setTimeout(() => window.addEventListener("scroll", scrollHandler, { passive: true }), 6000);
    const fallbackTimer = setTimeout(trigger, 45000);

    return () => {
      clearTimeout(mouseTimer);
      clearTimeout(scrollTimer);
      clearTimeout(fallbackTimer);
      document.removeEventListener("mouseleave", mouseHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email, source: "exit_intent" });
      setSubmitted(true);
      toast.success("Merci ! Ton guide arrive très bientôt 🌿");
    } catch (err) {
      toast.error("Une erreur est survenue. Réessaie dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="exit-popup"
      className="fixed inset-0 z-[60] bg-[#1A2421]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-cream rounded-[2rem] max-w-3xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:block relative">
          <img src={IMG.about} alt="Mon cycle, mon allié — guide gratuit nutrition holistique féminine" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest/30 to-transparent" />
        </div>
        <div className="p-10 md:p-12 relative">
          <button
            onClick={() => setOpen(false)}
            data-testid="exit-popup-close"
            className="absolute top-4 right-4 p-2 text-[#4A5D54] hover:text-forest"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          {!submitted ? (
            <>
              <Sparkles className="w-7 h-7 text-terracotta mb-4" />
              <p className="overline mb-3">Cadeau · Guide offert</p>
              <h3 className="font-serif text-4xl text-forest mb-3">Tu pars déjà ?</h3>
              <p className="text-[#4A5D54] mb-6 leading-relaxed">
                Reçois gratuitement mon guide <em>« Mon cycle, mon allié »</em> et commence
                à apprivoiser ton corps en douceur.
              </p>
              <form onSubmit={submit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  data-testid="exit-popup-email"
                  className="w-full px-5 py-3.5 rounded-full border border-[#E2DCD0] bg-white text-sm focus:outline-none focus:border-forest"
                />
                <button type="submit" disabled={loading} data-testid="exit-popup-submit"
                  className="btn-primary w-full justify-center disabled:opacity-60">
                  {loading ? "Envoi..." : "Recevoir mon guide"}
                </button>
              </form>
              <p className="text-xs text-[#4A5D54] mt-4">Aucun spam. Désabonnement en un clic.</p>
            </>
          ) : (
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-terracotta mb-4 mx-auto" />
              <h3 className="font-serif text-4xl text-forest mb-3">Merci 🌿</h3>
              <p className="text-[#4A5D54] mb-6">Ton guide arrive dans ta boîte mail.</p>
              <button onClick={() => setOpen(false)} className="btn-secondary">Fermer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
