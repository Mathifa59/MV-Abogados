import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import CallToAction from "@/components/home/CallToAction"; // <--- Importar
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <Services />
      <AboutPreview />
      <CallToAction /> {/* <--- Agregar aquí */}
      <Footer />
    </main>
  );
}