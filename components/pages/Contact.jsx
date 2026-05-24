"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, Send, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, ADDRESS } from "@/lib/constants";
import { SETMORE_SERVICES } from "@/lib/setmore";
import SEO from "@/components/site/SEO";

const API = "/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Appel découverte gratuit", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSent(true);
      toast.success("Message envoyé ! Je reviens vers toi très vite 🌿");
      setForm({ name: "", email: "", phone: "", subject: "Appel découverte gratuit", message: "" });
    } catch (err) {
      toast.error("Une erreur est survenue, réessaie ou contacte-moi par WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Prendre rendez-vous · Appel découverte gratuit · Bouillante, Guadeloupe"
        description="Réserve ton appel découverte gratuit de 15 min avec Apolline. Consultations en cabinet à Bouillante, à domicile Côte-sous-le-Vent ou en visio France entière."
        canonical="https://www.lamelodieducorps.com/contact"
      />

      <section className="pt-32 pb-12 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Prendre rendez-vous</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            On se <em className="text-terracotta">parle</em> ?
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Réserve directement ta séance en ligne, ou écris-moi via le formulaire.
            L'appel découverte de 15 minutes est offert et sans engagement.
          </p>
        </div>
      </section>

      {/* Setmore — réservation en ligne */}
      <section className="pb-20" data-testid="setmore-section">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-terracotta" />
            <p className="overline">Réservation en ligne · Via Setmore</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 max-w-2xl">
            Choisis ton type de séance et réserve directement un créneau
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SETMORE_SERVICES.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                data-testid={`setmore-${s.id}`}
                className={`group block rounded-[1.5rem] p-7 border transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${
                  s.highlight
                    ? "bg-forest text-white border-forest"
                    : "bg-white border-[#E2DCD0] hover:border-sage"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs uppercase tracking-[0.2em] font-medium ${s.highlight ? "text-sand" : "text-sage"}`}>
                    {s.duration}
                  </span>
                  <span className={`font-serif text-2xl ${s.highlight ? "text-white" : "text-terracotta"}`}>
                    {s.price}
                  </span>
                </div>
                <h3 className={`font-serif text-xl mb-3 leading-tight ${s.highlight ? "!text-white" : "text-forest"}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${s.highlight ? "text-[#D5C8B5]" : "text-[#4A5D54]"}`}>
                  {s.desc}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-medium ${s.highlight ? "text-white" : "text-forest"}`}>
                  Réserver <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-xs text-[#4A5D54] mt-8 italic">
            La réservation s'ouvre dans une nouvelle fenêtre sur la plateforme sécurisée Setmore.
          </p>
        </div>
      </section>

      {/* Coordonnées + formulaire */}
      <section className="pb-32 bg-cream-2 pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="overline mb-5">Autre moyen de me joindre</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest leading-tight">
              Tu préfères m'écrire ?
            </h2>
            <p className="text-[#4A5D54] mt-3">
              Le formulaire ci-dessous m'envoie directement un email. Je te réponds sous 48h.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="bg-forest text-white rounded-[2rem] p-10 sticky top-28">
                <h3 className="font-serif text-3xl !text-white mb-6">Coordonnées</h3>
                <ul className="space-y-5 text-[#D5C8B5]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <span>{ADDRESS}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white">{WHATSAPP_DISPLAY}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-[#D5C8B5] mb-4">Le canal de contact le plus rapide :</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-cta"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white px-6 py-3.5 rounded-full font-medium transition-all w-full justify-center">
                    <MessageCircle className="w-4 h-4" /> Discuter sur WhatsApp
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-sm text-[#D5C8B5] leading-relaxed">
                  <p className="mb-2 font-medium text-white">Horaires</p>
                  <p>Lundi au vendredi · 8h-17h</p>
                  <p className="mt-3 italic">Consultations en visio disponibles partout en France.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-white rounded-[2rem] p-12 border border-[#E2DCD0] text-center">
                  <div className="w-16 h-16 rounded-full bg-cream-2 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-3xl text-forest mb-4">Message bien reçu 🌿</h3>
                  <p className="text-[#4A5D54] mb-6">
                    Tu vas recevoir un email de confirmation. Je reviens vers toi dans les 48h.
                  </p>
                  <button onClick={() => setSent(false)} data-testid="contact-new-msg" className="btn-secondary">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#E2DCD0] space-y-5">
                  <h3 className="font-serif text-3xl text-forest mb-2">Formulaire de contact</h3>
                  <p className="text-sm text-[#4A5D54] mb-6">Décris-moi ta situation, je reviens vers toi sous 48h.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Prénom</label>
                      <input required value={form.name} onChange={handle("name")} data-testid="contact-name"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Email</label>
                      <input required type="email" value={form.email} onChange={handle("email")} data-testid="contact-email"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Téléphone (optionnel)</label>
                      <input value={form.phone} onChange={handle("phone")} data-testid="contact-phone"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Sujet</label>
                      <select value={form.subject} onChange={handle("subject")} data-testid="contact-subject"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest">
                        <option>Appel découverte gratuit</option>
                        <option>SOPK / Endométriose / Ménopause</option>
                        <option>Cours de yoga</option>
                        <option>Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Ton message</label>
                    <textarea required rows={6} value={form.message} onChange={handle("message")} data-testid="contact-message"
                      placeholder="Parle-moi de ta situation, de ce que tu cherches…"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest resize-none" />
                  </div>

                  <button type="submit" disabled={loading} data-testid="contact-submit"
                    className="btn-primary w-full justify-center disabled:opacity-60">
                    {loading ? "Envoi…" : "Envoyer mon message"} <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-[#4A5D54] text-center">
                    En envoyant ce message, tu acceptes d'être recontactée par email ou téléphone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
