
import MetaComponent from "@/components/common/MetaComponent";
import IronShelf from "@/components/products/IronShelf";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function IronShelfPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <IronShelf /> 
    </>  
  );
} 
