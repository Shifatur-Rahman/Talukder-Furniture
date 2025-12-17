
import MetaComponent from "@/components/common/MetaComponent";
import SalineStand from "@/components/products/SalineStand";

const metadata = {
  title: "Shop || Talukder - Office equipment ",
  description: "Talukder - Office equipment",
};


export default function SalineStandPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <SalineStand /> 
    </>  
  ); 
} 
 