// import Sofa221Product from "@/components/products/Sofa221";

import MetaComponent from "@/components/common/MetaComponent";
import SideBoard from "@/components/products/SideBoard";

const metadata = {
  title: "Shop || Talukder - Office equipment eCommerce Reactjs Template",
  description: "Talukder - Office equipment eCommerce Reactjs Template",
};

export default function SideBoardPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <SideBoard /> 
    </> 
  );
} 
