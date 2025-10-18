
import MetaComponent from "@/components/common/MetaComponent";
import LowBackChair from "@/components/products/LowBackChair";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function LowBackChairPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <LowBackChair /> 
    </>  
  );
} 
