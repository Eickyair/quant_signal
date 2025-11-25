import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhoIsItFor from '@/components/WhoIsItFor';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <HowItWorks />
      <WhoIsItFor />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
