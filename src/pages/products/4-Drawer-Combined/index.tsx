
import MetaComponent from "@/components/common/MetaComponent";
import FourDrawerCombinedCabinet from "@/components/products/FourDrawerCombined";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function FourDrawerCombinedCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <FourDrawerCombinedCabinet /> 
    </>  
  );
} 
