import Waredrobe from "@/components/products/Waredrobe";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function WaredrobePage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <Waredrobe /> 
    </> 
  );
}

