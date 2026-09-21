import { useState } from "react";
import { products, filtros } from "../data/products.js";
import { waLink } from "../data/site.js";
import ProductCard from "./ProductCard.jsx";

export default function Catalogo() {
  const [filtro, setFiltro] = useState("all");
  const visibles = products.filter((p) => filtro === "all" || p.category === filtro);

  return (
    <section id="catalogo" className="py-space-xl bg-surface-container-low scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Nuestros dulces mas pedidos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Elige tu favorito y escribenos por WhatsApp para reservar entrega o recojo.
            </p>
          </div>

          <div className="flex items-center gap-space-xs overflow-x-auto pb-2" role="group" aria-label="Filtrar productos">
            {filtros.map((f) => {
              const activo = filtro === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setFiltro(f.id)}
                  className={`px-4 py-2 rounded-full font-label-md text-label-md font-bold whitespace-nowrap transition-all ${
                    activo
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {visibles.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-space-xl p-space-lg rounded-3xl bg-surface-container-lowest flex flex-col md:flex-row items-center justify-between gap-space-md shadow-[0_4px_24px_rgba(74,46,27,0.06)]">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              Torta a medida
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Preparamos tortas con la decoracion y los rellenos que prefieras.
            </p>
          </div>
          <a
            href={waLink("Hola DOMI DULC'S! Tengo una consulta para una torta a medida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all whitespace-nowrap"
          >
            Consultar torta a medida
          </a>
        </div>
      </div>
    </section>
  );
}
