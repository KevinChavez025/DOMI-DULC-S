import { site, waLink } from "../data/site.js";
import Img from "./Img.jsx";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catalogo" },
  { href: "#eventos", label: "Eventos" },
  { href: "#como-pedir", label: "Como pedir" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(74,46,27,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <a href="#inicio" className="flex items-center gap-space-sm">
          <Img
            src={site.images.logo}
            alt="Logo de DOMI DULC'S"
            className="w-10 h-10 rounded-full object-cover shadow-[0_2px_8px_rgba(74,46,27,0.12)]"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">
              {site.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {site.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-space-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-space-md py-space-sm rounded-full font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Hola DOMI DULC'S! Quisiera hacer un pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-space-sm px-space-lg py-space-sm bg-secondary-container text-on-secondary-fixed rounded-full font-label-lg text-label-lg font-bold shadow-[0_4px_14px_rgba(107,254,156,0.4)] hover:bg-secondary-fixed-dim transition-all"
        >
          <span className="material-symbols-outlined text-secondary">chat</span>
          <span className="hidden sm:inline">Pedir por WhatsApp</span>
          <span className="sm:hidden">Pedir</span>
        </a>
      </div>
    </header>
  );
}
