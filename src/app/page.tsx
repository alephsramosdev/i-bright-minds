import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Pillars } from '@/components/sections/Pillars';
import { Metrics } from '@/components/sections/Metrics';
import { Methodology } from '@/components/sections/Methodology';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pillars />
      <Metrics />
      <Methodology />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
