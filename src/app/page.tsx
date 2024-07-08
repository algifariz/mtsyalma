// import FactsSection from "@/components/data";
const FactsSection =  dynamic(() => import('@/components/data'), { ssr: false });
import Footer from "@/components/footer";
import MyCarousel from "@/components/korsel";
import PpdbSection from "@/components/ppdb";
import WelcomeSection from "@/components/sambutan";
import SolusiDigital from "@/components/solusi";
import dynamic from 'next/dynamic';
const Testimonials = dynamic(() => import('@/components/quotes'), { ssr: false });
const Gallery = dynamic(() => import('@/components/galeri'), { ssr: false });

export default function Home() {
  return (
   <main>
    <MyCarousel/>
    <SolusiDigital/>
    <WelcomeSection/>
    <FactsSection/>
    <PpdbSection/>
    <Gallery/>
    <Testimonials/>
   </main>
  );
}
