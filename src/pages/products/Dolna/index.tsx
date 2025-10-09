
import MetaComponent from "@/components/common/MetaComponent";
import Dolna from "@/components/products/Dolna";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DolnaPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <Dolna /> 
    </>  
  );
} 
