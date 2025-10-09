
import MetaComponent from "@/components/common/MetaComponent";
import Dining4Seater from "@/components/products/Dining4Seater";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function Dining4SeaterPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <Dining4Seater /> 
    </>  
  );
} 
