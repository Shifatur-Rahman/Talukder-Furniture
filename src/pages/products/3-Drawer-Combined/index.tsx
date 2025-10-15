
import MetaComponent from "@/components/common/MetaComponent";
import ThreeDrawerCombinedCabinet from "@/components/products/ThreeDrawerCombined";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ThreeDrawerCombinedCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ThreeDrawerCombinedCabinet /> 
    </>  
  );
} 
