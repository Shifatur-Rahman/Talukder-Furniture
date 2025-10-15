
import MetaComponent from "@/components/common/MetaComponent";
import TwoDrawerCombinedCabinet from "@/components/products/TwoDrawerCombined";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function TwoDrawerCombinedCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <TwoDrawerCombinedCabinet /> 
    </>  
  );
} 
