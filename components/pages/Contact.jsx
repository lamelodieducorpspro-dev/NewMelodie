"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Send, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, ADDRESS } from "@/lib/constants";
import { SETMORE_SERVICES } from "@/lib/setmore";

const API = "/api";

const contactSchema = z.object({
  name: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().default("Appel découverte gratuit"),
  message: z.string().min(1, "Le message est requis"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Appel découverte gratuit",
      message: "",
    },
  });

  const submit = async (data: ContactForm) => {
    try {
      await axios.post(`${API}/contact`, data);
      toast.success("Message envoyé ! Je reviens vers toi très vite 🌿");
      reset();
      setSent(true);
    } catch (err) {
      toast.error("Une erreur est survenue, réessaie ou contacte-moi par WhatsApp.");
    }
  };

  return (
    <>
      {/* SEO is handled by app/contact/page.js metadata */}

      <section className="pt-32 pb-12 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Prendre rendez-vous</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            On se <em className="text-terracotta">parle</em> ?
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Réserve directement ta séance en ligne, ou écris-moi via le formulaire.
            L&apos;appel découverte de 15 minutes est offert et sans engagement.
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
            La réservation s&apos;ouvre dans une nouvelle fenêtre sur la plateforme sécurisée Setmore.
          </p>
        </div>
      </section>

      {/* Coordonnées + formulaire */}
      <section className="pb-32 bg-cream-2 pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="overline mb-5">Autre moyen de me joindre</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest leading-tight">
              Tu préfères m&apos;écrire ?
            </h2>
            <p className="text-[#4A5D54] mt-3">
              Le formulaire ci-dessous m&apos;envoie directement un email. Je te réponds sous 48h.
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
                    Tu vas recevoir un email de confirmation. Je reviens vers toi sous 48h.
                  </p>
                  <button onClick={() => setSent(false)} data-testid="contact-new-msg" className="btn-secondary">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(submit)} className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#E2DCD0] space-y-5">
                  <h3 className="font-serif text-3xl text-forest mb-2">Formulaire de contact</h3>
                  <p className="text-sm text-[#4A5D54] mb-6">Décris-moi ta situation, je reviens vers toi sous 48h.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Prénom</label>
                      <input
                        {...register("name")}
                        required
                        data-testid="contact-name"
                        className={`w-full px-4 py-3 rounded-2xl border ${errors.name ? "border-red-500" : "border-[#E2DCD0]"} bg-cream-2/40 focus:outline-none focus:border-forest`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Email</label>
                      <input
                        type="email"
                        {...register("email")}
                        required
                        data-testid="contact-email"
                        className={`w-full px-4 py-3 rounded-2xl border ${errors.email ? "border-red-500" : "border-[#E2DCD0]"} bg-cream-2/40 focus:outline-none focus:border-forest`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Téléphone (optionnel)</label>
                      <input
                        {...register("phone")}
                        data-testid="contact-phone"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Sujet</label>
                      <select
                        {...register("subject")}
                        data-testid="contact-subject"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest"
                      >
                        <option value="Appel découverte gratuit">Appel découverte gratuit</option>
                        <option value="SOPK / Endométriose / Ménopause">SOPK / Endométriose / Ménopause</option>
                        <option value="Cours de yoga">Cours de yoga</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Ton message</label>
                    <textarea
                      {...register("message")}
                      required
                      rows={6}
                      data-testid="contact-message"
                      placeholder="Parle-moi de ta situation, de ce que tu cherches…"
                      className={`w-full px-4 py-3 rounded-2xl border ${errors.message ? "border-red-500" : "border-[#E2DCD0]"} bg-cream-2/40 focus:outline-none focus:border-forest resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="contact-submit"
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {isSubmitting ? "Envoi…" : "Envoyer mon message"} <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-[#4A5D54] text-center">
                    En envoyant ce message, tu acceptes d&apos;être recontactée par email ou téléphone.
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
