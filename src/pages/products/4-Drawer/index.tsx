
import MetaComponent from "@/components/common/MetaComponent";
import FourDrawerCabinet from "@/components/products/FourDrawer";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function FourDrawerCabinetPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <FourDrawerCabinet /> 
    </>  
  );
} 
