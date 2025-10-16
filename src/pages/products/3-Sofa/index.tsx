
import MetaComponent from "@/components/common/MetaComponent";
import ThreeSofa from "@/components/products/ThreeSofa";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ThreeSofaPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ThreeSofa /> 
    </>  
  );
} 
