export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Manifesto Tajani";
export const APP_LOGO = "https://placehold.co/128x128/39FF14/000000?text=MT";

// Valores padrão para evitar erro de build
export const COOKIE_NAME = "manifesto-cookie";
export const ONE_YEAR_MS = 31536000000;

export const getLoginUrl = () => {
  return "#"; // Desativado para versão estática
};
