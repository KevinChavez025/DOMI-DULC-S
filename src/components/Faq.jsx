import { useState } from "react";

const preguntas = [
  {
    titulo: "Anticipacion del pedido",
    texto:
      "Para tortas y cajas dulces, pide con 72 horas de anticipacion. Para tortas tematicas, bodas y eventos, reserva con 1 a 2 semanas.",
  },
  {
    titulo: "Delivery y costo",
    texto:
      "Si hacemos delivery. El costo se calcula segun la direccion que nos indiques por WhatsApp. Tambien puedes recoger sin costo en el taller.",
  },
  {
    titulo: "Formas de pago",
    texto:
      "Transferencia bancaria, tarjeta con link de pago o efectivo al recoger. Para pedidos personalizados pedimos 50% de adelanto.",
  },
];

export default function Faq() {
  const [abierta, setAbierta] = useState(null);

  return (
    <section className="py-space-xl bg-background">
      <div className="max-w-4xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-space-lg">
          Preguntas frecuentes
        </h2>

        <div className="space-y-space-sm">
          {preguntas.map((q, i) => {
            const open = abierta === i;
            return (
              <div key={q.titulo} className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setAbierta(open ? null : i)}
                  className="w-full flex items-center justify-between gap-space-md text-left"
                >
                  <span className="font-title-md text-title-md text-primary font-bold">{q.titulo}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {open && (
                  <p className="pt-space-sm text-on-surface-variant font-body-md text-body-md">
                    {q.texto}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
