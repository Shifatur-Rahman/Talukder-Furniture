
import MetaComponent from "@/components/common/MetaComponent";
import HighBackChair from "@/components/products/HighBackChair";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function HighBackChairPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <HighBackChair /> 
    </>  
  );
} 
