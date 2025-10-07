import SofaProduct from "@/components/products/Sofa";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment ",
  description: "Talukder - Office equipment",
};


export default function ShoeRackPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <SofaProduct /> 
    </> 
  );
} 
