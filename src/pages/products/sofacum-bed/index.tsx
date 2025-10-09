import SofaCumBedProduct from "@/components/products/SofaCumBed";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function SofaCumBedPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <SofaCumBedProduct /> 
    </> 
  );
} 