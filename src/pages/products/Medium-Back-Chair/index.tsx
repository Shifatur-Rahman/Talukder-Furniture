
import MetaComponent from "@/components/common/MetaComponent";
import MediumBackChair from "@/components/products/MediumBackChair";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function MediumBackChairPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <MediumBackChair /> 
    </>  
  );
} 
