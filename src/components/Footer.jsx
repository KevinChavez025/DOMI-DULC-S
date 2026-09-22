import { site } from "../data/site.js";
import Img from "./Img.jsx";

export default function Footer() {
  const redes = site.socials.filter((s) => s.url);

  return (
    <footer className="w-full bg-surface-container-lowest pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop mb-space-xl">
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <Img
                src={site.images.logo}
                alt="Logo de DOMI DULC'S"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-headline-sm text-headline-sm text-primary">{site.name}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Pasteleria artesanal hecha a pedido, con ingredientes seleccionados y recetas propias.
            </p>
            {redes.length > 0 && (
              <div className="flex items-center gap-space-sm">
                {redes.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                  >
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-space-md">
            <h3 className="font-title-md text-title-md text-primary font-bold">Horarios de atencion</h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              {site.horarios.map((h) => (
                <li key={h.dia} className="flex justify-between gap-space-md">
                  <span className="font-medium">{h.dia}</span>
                  <span>{h.hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
          {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}