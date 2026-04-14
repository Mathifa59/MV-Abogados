import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Founder from "@/components/home/Founder";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <Services />
      <AboutPreview />
      <Founder />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
