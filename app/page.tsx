import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Firm from "@/components/home/Firm";
import Team from "@/components/home/Team";
import Commitment from "@/components/home/Commitment";
import Testimonials from "@/components/home/Testimonials";
import ContactCta from "@/components/home/ContactCta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <Services />
      <Firm />
      <Team />
      <Commitment />
      <Testimonials />
      <ContactCta />
      <Footer />
    </main>
  );
}
