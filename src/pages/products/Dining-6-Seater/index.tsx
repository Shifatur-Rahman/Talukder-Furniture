
import MetaComponent from "@/components/common/MetaComponent";
import Dining6Seater from "@/components/products/Dining6Seater";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function Dining6SeaterPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <Dining6Seater /> 
    </>  
  );
} 
