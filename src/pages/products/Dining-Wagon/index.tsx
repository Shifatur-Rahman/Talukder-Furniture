
import MetaComponent from "@/components/common/MetaComponent";
import DiningWagon from "@/components/products/DiningWagon";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DiningWagonPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DiningWagon /> 
    </>  
  );
} 
