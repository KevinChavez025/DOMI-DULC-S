import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Eventos from "./components/Eventos.jsx";
import ComoPedir from "./components/ComoPedir.jsx";
import Faq from "./components/Faq.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappFloat from "./components/WhatsappFloat.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-background">
        <Hero />
        <Catalogo />
        <Eventos />
        <ComoPedir />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}