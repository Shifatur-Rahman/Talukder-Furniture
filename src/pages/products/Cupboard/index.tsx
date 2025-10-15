
import MetaComponent from "@/components/common/MetaComponent";
import Cupboard from "@/components/products/Cupboard";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function CupboardPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <Cupboard /> 
    </>  
  );
} 
