import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WOW from "wow.js";
import * as bootstrap from "bootstrap"; // ✅ Import at the top

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pathname } = useLocation();

  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    // Close any open modal
    document.querySelectorAll(".modal.show").forEach((modal) => {
      const instance = bootstrap.Modal.getInstance(modal);
      if (instance) instance.hide();
    });

    // Close any open offcanvas
    document.querySelectorAll(".offcanvas.show").forEach((offcanvas) => {
      const instance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (instance) instance.hide();
    });
  }, [pathname]);
  return <>{children}</>;
}
