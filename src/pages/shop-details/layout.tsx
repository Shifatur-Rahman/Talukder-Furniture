import Footer1 from "@/components/footers/Footer1";

import Topbar1 from "@/components/headers/Topbar1";

import React from "react";

export default function ShopDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar1 />

      {children}
      <Footer1 />
    </>
  );
}
