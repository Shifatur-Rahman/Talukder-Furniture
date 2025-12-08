
import MetaComponent from "@/components/common/MetaComponent";
import DressingStool from "@/components/products/DressingStool";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DressingStoolPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DressingStool /> 
    </>  
  );
} 
