import { useState } from "react";

// Imagen con respaldo: si el link falla, muestra un bloque neutro en vez de un icono roto.
export default function Img({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} bg-surface-container flex items-center justify-center text-on-surface-variant`}
      >
        <span className="material-symbols-outlined text-4xl">image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
