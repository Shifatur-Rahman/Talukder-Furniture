
import MetaComponent from "@/components/common/MetaComponent";
import ThreeDrawerCabinet from "@/components/products/ThreeDrawerCabinet";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ThreeDrawerCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ThreeDrawerCabinet /> 
    </>  
  );
} 
