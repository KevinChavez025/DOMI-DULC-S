import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "../data/site.js";

export default function WhatsappFloat() {
  return (
    <a
      href={waLink("Hola DOMI DULC'S! Quisiera hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-transform"    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}