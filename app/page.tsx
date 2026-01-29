import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Guarantees from "@/components/Guarantees";
import Services from "@/components/Services";
import Process from "@/components/Process";
import International from "@/components/International";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <International />
      <Process />
      <Guarantees />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
