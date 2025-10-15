
import MetaComponent from "@/components/common/MetaComponent";
import TwoDrawerCabinet from "@/components/products/TwoDrawerCabinet";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function TwoDrawerCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <TwoDrawerCabinet /> 
    </>  
  );
} 
