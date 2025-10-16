
import MetaComponent from "@/components/common/MetaComponent";
import OneSofa from "@/components/products/OneSofa";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function OneSofaPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <OneSofa /> 
    </>  
  );
} 
