import { site, waLink } from "../data/site.js";
import Img from "./Img.jsx";

const badges = [
  { icon: "moped", titulo: "Envios y retiro", texto: "Area urbana puntual" },
  { icon: "cake", titulo: "100% Personalizado", texto: "A tu estilo y tematica" },
  { icon: "favorite", titulo: "Hecho con amor", texto: "Sin conservantes" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden scroll-mt-20 min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Img
          src={site.images.hero}
          alt="Torta artesanal en el taller de DOMI DULC'S"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10 py-space-xl w-full">
        <div className="max-w-2xl flex flex-col items-start gap-space-md">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-secondary-fixed">local_fire_department</span>
              Horneado hoy
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">
              100% artesanal
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
              Recetas de autor
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            El toque dulce que alegra tus <span className="text-secondary-fixed-dim">momentos</span> mas especiales.
          </h1>

          <p className="font-body-lg text-body-lg text-white/90">
            Tortas, cupcakes y dulces artesanales preparados a pedido con ingredientes de calidad.
            Pide por WhatsApp y recibe en casa o recoge en el taller.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
            <a
              href={waLink("Hola DOMI DULC'S! Quisiera hacer un pedido especial.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-secondary-container text-on-secondary-fixed font-title-md text-title-md font-bold shadow-[0_8px_20px_rgba(107,254,156,0.45)] hover:bg-secondary-fixed-dim transition-all"
            >
              <span className="material-symbols-outlined text-secondary text-2xl">chat</span>
              Haz tu pedido por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-space-xs px-6 py-4 rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-high transition-all"
            >
              Ver catalogo
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md w-full pt-space-sm">
            {badges.map((b) => (
              <div key={b.titulo} className="flex items-center gap-space-xs">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">{b.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-white font-bold">{b.titulo}</p>
                  <p className="font-label-sm text-label-sm text-white/80">{b.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-8 right-8 bg-secondary-container text-on-secondary-fixed px-4 py-2 rounded-full font-label-lg text-label-lg font-bold shadow-md items-center gap-1.5 z-10">
        <span className="material-symbols-outlined text-secondary">star</span>
        4.9 / 5.0 (420+ Pedidos)
      </div>

      <div className="hidden lg:flex absolute bottom-8 right-8 bg-surface-container-lowest p-2 rounded-2xl shadow-[0_10px_30px_rgba(74,46,27,0.18)] items-center gap-3 z-10">
        <Img
          src={site.images.mascota}
          alt="Mascota de DOMI DULC'S"
          className="w-16 h-16 rounded-xl object-contain bg-surface-container-low p-1"
        />
        <div className="pr-2">
          <p className="font-headline-sm text-headline-sm text-primary font-bold">Aprobado!</p>
          <p className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">thumb_up</span> Calidad garantizada
          </p>
        </div>
      </div>
    </section>
  );
}