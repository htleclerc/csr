import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Cabinet from '@/components/Cabinet';
import Expertises from '@/components/Expertises';
import Sectors from '@/components/Sectors';
import Founder from '@/components/Founder';
import WhyUs from '@/components/WhyUs';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cabinet />
        <Expertises />
        <Sectors />
        <Founder />
        <WhyUs />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
