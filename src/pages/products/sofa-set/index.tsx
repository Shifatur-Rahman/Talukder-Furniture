import SofaProduct from "@/components/products/Sofa";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment eCommerce Reactjs Template",
  description: "Talukder - Office equipment eCommerce Reactjs Template",
};

export default function SofaSetPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <SofaProduct /> 
    </> 
  );
} 