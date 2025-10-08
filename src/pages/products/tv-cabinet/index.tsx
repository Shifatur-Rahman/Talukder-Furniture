import TvCabinet from "@/components/products/tvCabinet";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function TvCabinetPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <TvCabinet /> 
    </> 
  );
}

