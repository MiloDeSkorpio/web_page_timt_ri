import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Update document title
    const baseTitle = "Tren El Insurgente";
    let pageTitle = "";

    if (pathname.startsWith("/como-funciona")) pageTitle = "Cómo funciona";
    else if (pathname.startsWith("/proyecto")) pageTitle = "Proyecto";
    else if (pathname.startsWith("/reglamento")) pageTitle = "Reglamento";
    else if (pathname.startsWith("/centro-ayuda")) pageTitle = "Centro de Ayuda";
    else if (pathname.startsWith("/aviso-de-privacidad")) pageTitle = "Aviso de Privacidad";

    document.title = pageTitle ? `${baseTitle} | ${pageTitle}` : baseTitle;
  }, [pathname]);

  return null;
};
