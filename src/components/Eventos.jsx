import { site, waLink } from "../data/site.js";
import Img from "./Img.jsx";

const puntos = [
  {
    icon: "palette",
    titulo: "Diseno y tematica a tu gusto",
    texto: "Fondant, efecto acuarela, flores comestibles y toppers con tu nombre o motivo.",
  },
  {
    icon: "lunch_dining",
    titulo: "Degustacion previa",
    texto: "Para eventos de mas de 50 invitados, prueba 4 combinaciones de bizcocho y relleno.",
  },
  {
    icon: "schedule",
    titulo: "Entrega y montaje puntual",
    texto: "Llevamos la torta con cuidado y la armamos en el salon.",
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-space-xl bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl">
              <Img
                src={site.images.eventos}
                alt="Torta de tres pisos decorada para una celebracion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <h3 className="font-headline-md text-headline-md font-bold">
                  Montaje y mesa dulce completa
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-space-md order-1 lg:order-2">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Tortas para tus grandes celebraciones
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Bodas, cumpleanos, 15 anos y baby showers. Trabajamos contigo para crear una pieza
              central que se vea bien y sepa mejor.
            </p>

            <div className="space-y-space-md">
              {puntos.map((p) => (
                <div key={p.titulo} className="flex items-start gap-space-sm">
                  <div className="w-9 h-9 rounded-full bg-surface-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">{p.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary font-bold">{p.titulo}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                href={waLink("Hola DOMI DULC'S! Quiero cotizar una torta o mesa dulce para un evento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-sm px-8 py-4 rounded-full bg-[#311908] text-on-primary font-title-md text-title-md font-bold shadow-lg hover:bg-primary-container transition-all"
              >
                Cotizar evento por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
