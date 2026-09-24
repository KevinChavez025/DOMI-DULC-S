// Productos del catalogo. category: "tortas" o "individuales" (usado por los filtros).

import tortaCafeImg from "../assets/productos/torta_cafe.webp";
import tortaHeladaImg from "../assets/productos/torta_helada.webp";
import tortaRedVelvetImg from "../assets/productos/torta_red_velvet.webp";
import tortaSelvaNegraImg from "../assets/productos/torta_selva_negra.webp";
import tortaTresLechesImg from "../assets/productos/torta_tres_leches.webp";
import pionomoFrutadoImg from "../assets/productos/pionono_frutado.webp";
import tartaletaFresaImg from "../assets/productos/tartaleta_fresa.webp";
import pastelAcelgaImg from "../assets/productos/pastel_acelga.webp";
import alfajoresImg from "../assets/productos/alfajores.webp";
import browniesImg from "../assets/productos/brownies.webp";
import empanadaMixtaImg from "../assets/productos/empanada_mixta.webp";

export const products = [
  {
    id: "torta-cafe",
    category: "tortas",
    name: "Torta de Cafe",
    detail: "Bizcocho de cafe y crema",
    description: "Bizcocho humedo con esencia de cafe, relleno cremoso y cobertura suave.",
    size: "10-14 porciones",
    image: tortaCafeImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Torta de Cafe",
  },
  {
    id: "torta-helada",
    category: "tortas",
    name: "Torta Helada",
    detail: "Capas frias y cremosas",
    description: "Torta helada con capas de crema y bizcocho, ideal para el calor.",
    size: "10-12 porciones",
    image: tortaHeladaImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Torta Helada",
  },
  {
    id: "torta-red-velvet",
    category: "tortas",
    name: "Torta Red Velvet",
    detail: "Con queso crema",
    description: "Bizcocho rojo aterciopelado con relleno y cobertura de queso crema.",
    size: "10-14 porciones",
    image: tortaRedVelvetImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Torta Red Velvet",
  },
  {
    id: "torta-selva-negra",
    category: "tortas",
    name: "Torta Selva Negra",
    detail: "Chocolate y cerezas",
    description: "Bizcocho de chocolate, crema chantilly y cerezas entre cada capa.",
    size: "12-16 porciones",
    image: tortaSelvaNegraImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Torta Selva Negra",
  },
  {
    id: "tres-leches",
    category: "tortas",
    name: "Tres Leches Artesanal",
    detail: "Con canela y merengue",
    description: "Bizcocho aireado banado en tres leches, coronado con merengue.",
    size: "10-12 porciones",
    image: tortaTresLechesImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Torta Tres Leches",
  },
  {
    id: "pionono-frutado",
    category: "tortas",
    name: "Pionono Frutado",
    detail: "Relleno de frutas y crema",
    description: "Bizcocho enrollado relleno de crema y frutas de estacion.",
    size: "8-10 porciones",
    image: pionomoFrutadoImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir el Pionono Frutado",
  },
  {
    id: "tartaleta-fresa",
    category: "tortas",
    name: "Tartaleta de Fresa",
    detail: "Crema pastelera y fresas",
    description: "Base crocante con crema pastelera y fresas frescas por encima.",
    size: "6-8 porciones",
    image: tartaletaFresaImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir la Tartaleta de Fresa",
  },
  {
    id: "pastel-acelga",
    category: "individuales",
    name: "Pastel de Acelga",
    detail: "Receta salada de la casa",
    description: "Pastel salado de acelga, ideal para compartir en la mesa dulce y salada.",
    size: "Por porciones",
    image: pastelAcelgaImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir el Pastel de Acelga",
  },
  {
    id: "alfajores",
    category: "individuales",
    name: "Alfajores",
    detail: "Con manjar artesanal",
    description: "Alfajores de maicena rellenos de manjar, suaves y caseros.",
    size: "Por porciones",
    image: alfajoresImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir Alfajores",
  },
  {
    id: "brownies",
    category: "individuales",
    name: "Brownies",
    detail: "Chocolate intenso",
    description: "Brownies fudgy de chocolate, horneados en el punto justo.",
    size: "Por porciones",
    image: browniesImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir Brownies",
  },
  {
    id: "empanada-mixta",
    category: "individuales",
    name: "Empanada Mixta",
    detail: "Relleno a eleccion",
    description: "Empanadas horneadas con relleno mixto, recien hechas.",
    size: "Por porciones",
    image: empanadaMixtaImg,
    mensaje: "Hola DOMI DULC'S! Quiero pedir Empanadas Mixtas",
  },
];

export const filtros = [
  { id: "all", label: "Todos" },
  { id: "tortas", label: "Tortas" },
  { id: "individuales", label: "Individuales y bocados" },
];