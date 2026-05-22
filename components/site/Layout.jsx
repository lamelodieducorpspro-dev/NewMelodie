"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import ExitIntentPopup from "./ExitIntentPopup";
import ReassuranceBanner from "./ReassuranceBanner";
import { Toaster } from "sonner";

export default function Layout({ children, hideBanner = false }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>{children}</main>
      {!hideBanner && <ReassuranceBanner />}
      <Footer />
      <WhatsAppFAB />
      <ExitIntentPopup />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
