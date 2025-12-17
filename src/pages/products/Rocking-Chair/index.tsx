
import MetaComponent from "@/components/common/MetaComponent";
import RockingChair from "@/components/products/RockingChair";

const metadata = {
  title: "Shop || Talukder - Office equipment ",
  description: "Talukder - Office equipment",
};


export default function RockingChairPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <RockingChair /> 
    </>  
  ); 
} 
 