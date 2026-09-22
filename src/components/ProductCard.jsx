import { waLink } from "../data/site.js";
import Img from "./Img.jsx";

export default function ProductCard({ product }) {
  return (
    <article className="group bg-surface-container-lowest rounded-3xl p-space-md shadow-[0_4px_20px_rgba(74,46,27,0.06)] hover:shadow-[0_14px_30px_rgba(74,46,27,0.12)] transition-all flex flex-col justify-between">
      <div>
        <div className="relative h-56 rounded-2xl overflow-hidden mb-space-md">
          <Img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-sm text-label-sm shadow-sm">
            {product.size}
          </div>
          <div className="absolute bottom-3 right-3 bg-surface-container-lowest text-primary px-3 py-1 rounded-full font-label-lg text-label-lg font-bold shadow-md">
            {product.price}
          </div>
        </div>
        <p className="font-label-md text-label-md text-secondary mb-1">{product.detail}</p>
        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{product.name}</h3>
        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mt-1">
          {product.description}
        </p>
      </div>
      <div className="pt-space-md mt-space-sm flex justify-end">
        <a
          href={waLink(product.mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-sm hover:bg-secondary-fixed-dim transition-all"
        >
          <span className="material-symbols-outlined text-secondary text-lg">chat</span>
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
