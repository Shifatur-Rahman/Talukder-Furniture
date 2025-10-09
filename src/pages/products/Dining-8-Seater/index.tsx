
import MetaComponent from "@/components/common/MetaComponent";
import Dining8Seater from "@/components/products/Dining8Seater";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function Dining8SeaterPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <Dining8Seater /> 
    </>  
  );
} 
