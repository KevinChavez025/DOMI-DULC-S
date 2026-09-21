import { waLink } from "../data/site.js";

export default function Cta() {
  return (
    <section className="py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-space-lg bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-[0_8px_24px_rgba(74,46,27,0.06)]">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Para tu antojo o tu evento, escribenos.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Te ayudamos a elegir sabores y porciones, y a asegurar tu entrega a tiempo.
            </p>
          </div>
          <a
            href={waLink("Hola DOMI DULC'S! Tengo un antojo y quiero hacer un pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-full bg-secondary-container text-on-secondary-fixed font-title-md text-title-md font-bold shadow-[0_8px_25px_rgba(107,254,156,0.5)] hover:bg-secondary-fixed-dim transition-all"
          >
            <span className="material-symbols-outlined text-secondary text-2xl">chat</span>
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
