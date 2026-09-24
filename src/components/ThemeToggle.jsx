import { useEffect, useState } from "react";

function getInicial() {
  const guardado = localStorage.getItem("theme");
  if (guardado === "dark" || guardado === "light") return guardado;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [tema, setTema] = useState(getInicial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
    localStorage.setItem("theme", tema);
  }, [tema]);

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={() => setTema((t) => (t === "dark" ? "light" : "dark"))}
      className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
    >
      <span className="material-symbols-outlined">
        {tema === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}