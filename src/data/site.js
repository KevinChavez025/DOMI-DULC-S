// Datos generales del sitio. Cambiar aqui y se actualiza en toda la pagina.
import heroImg from "../assets/hero_domi.png";
import logoImg from "../assets/logo_domi.png";

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
    mascota: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8K81eZEmGu2QwPtAf5LsAEZrW4-Cdpz56EPrFgTP7QubHkrUFiGSikqAMVPME5nCYUPksWi5aIKNsM4cgDhgwmqVJMtA9xuzpP3jOzQm0C54MQv1hZH28_GW_t1wLDTC9Wh1dmNkeCzXlpEdJosnbB2wBbNsKa_xApGFQcZKTZ139afo4NTL_31u1Qfjy2lDNSpEcSZquVXSRPPIkvQkFgbTf6k6b4upBrtXyhD2XTCldI6OysVri1nDT551apAmQA",
    eventos: "https://lh3.googleusercontent.com/aida-public/AB6AXuAev9kxFDIbF5FpCoOT12e2ysyeESPbHYTgxEqxLIp9541uGIQeQAu-v7BnrojiNQXMmxa4dUobMpUSJpYhuAGMYtTwrrbE9TI2h__HJ21kjjaVo7GDJGshgMU5cVYOuND14gQXdo8tfaAgvnmoCm-LeQaZLfUj5_lD21pDEpCYX-lA2uG_AeWOQkPSuSt0X9tVzxfaSyWpM_mjeSm2tAWGdaHNQkLSEy3H52ff3yDYM0Ct-wlQzyzh",
  },
};

export function waLink(mensaje = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}