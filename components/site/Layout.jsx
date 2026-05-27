import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import ExitIntentPopup from "./ExitIntentPopup";
import ReassuranceBanner from "./ReassuranceBanner";
import { Toaster } from "sonner";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children, hideBanner = false }) {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Breadcrumbs />
      <ScrollToTop />
      <main id="main-content">{children}</main>
      {!hideBanner && <ReassuranceBanner />}
      <Footer />
      <WhatsAppFAB />
      <ExitIntentPopup />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
