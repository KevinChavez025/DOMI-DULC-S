// Datos generales del sitio. Cambiar aqui y se actualiza en toda la pagina.
import heroImg from "../assets/hero_domi.png";
import logoImg from "../assets/logo_domi.png";
import mascotaImg from "../assets/mascota_domi.png";
import eventosImg from "../assets/eventos_domi.png";

export const site = {
  name: "DOMI DULC'S",
  tagline: "Pasteleria Artesanal",
  whatsapp: "51993746174",
  socials: [
    { label: "Instagram", icon: "photo_camera", url: "" },
    { label: "Facebook", icon: "public", url: "" },
    { label: "TikTok", icon: "videocam", url: "" },
  ],
  horarios: [
    { dia: "Lunes a Viernes", hora: "8:00 AM a 7:30 PM" },
    { dia: "Sabados", hora: "9:00 AM a 8:00 PM" },
    { dia: "Domingos", hora: "9:00 AM a 2:00 PM" },
  ],
  images: {
    logo: logoImg,
    hero: heroImg,
    mascota: mascotaImg,
    eventos: eventosImg,
  },
};

export function waLink(mensaje = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}