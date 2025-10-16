
import MetaComponent from "@/components/common/MetaComponent";
import TwoSofa from "@/components/products/TwoSofa";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function TwoSofaPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <TwoSofa /> 
    </>  
  );
} 
