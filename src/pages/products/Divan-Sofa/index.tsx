
import MetaComponent from "@/components/common/MetaComponent";
import DivanSofa from "@/components/products/DivanSofa";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DivanSofaPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DivanSofa /> 
    </>  
  );
} 
