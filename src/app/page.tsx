import Navbar from "@/components/theme/Navbar";
import Introduction from "@/components/theme/Introduction";
import Profile from "@/components/theme/Profile";
import WorkProcess from "@/components/theme/WorkProcess";
import Portfolio from "@/components/theme/Portfolio";
import Services from "@/components/theme/Services";
import ContactSection from "@/components/theme/ContactSection";
import Footer from "@/components/theme/Footer";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-gray-900">
      <Navbar />
      <Introduction />
      <Profile />
      <WorkProcess />
      <Portfolio />
      <Services />
      <ContactSection />
      <Footer />
    </main>
  );
}
