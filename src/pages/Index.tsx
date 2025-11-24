import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookShowcase from "@/components/BookShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <BookShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default Index;
