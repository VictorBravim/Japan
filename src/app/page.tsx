// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Locais from '@/components/Locais'
import Cambio from '@/components/Cambio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Sobre />
      <Locais />
      <Cambio />
      <Footer />
    </main>
  );
}