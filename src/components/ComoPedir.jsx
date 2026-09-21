const pasos = [
  {
    titulo: "Elige tu torta o dulce",
    texto: "Mira el catalogo y escoge el producto, el tamano y la tematica que quieras.",
  },
  {
    titulo: "Escribenos por WhatsApp",
    texto: "Indica la fecha, si quieres dedicatoria y tu direccion para delivery o recojo.",
  },
  {
    titulo: "Confirmamos y horneamos",
    texto: "Coordinamos el pago y horneamos tu pedido para que llegue fresco.",
  },
];

export default function ComoPedir() {
  return (
    <section id="como-pedir" className="py-space-xl bg-surface-container-low scroll-mt-20">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Como funciona tu pedido
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Sin formularios ni registros. Atendemos directo por WhatsApp.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center font-display-lg text-2xl font-bold mb-space-md">
                {i + 1}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">
                {p.titulo}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
