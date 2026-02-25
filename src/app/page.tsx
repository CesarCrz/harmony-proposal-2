import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurStory from "@/components/OurStory";
import Polishes from "@/components/Polishes";
import Treatments from "@/components/Treatments";
import Products from "@/components/Products";
import News from "@/components/News";
import FollowUs from "@/components/FollowUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OurStory />
        <Polishes />
        <Treatments />
        <Products />
        <News />
        <FollowUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
