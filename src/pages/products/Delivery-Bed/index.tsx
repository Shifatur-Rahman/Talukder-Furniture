
import MetaComponent from "@/components/common/MetaComponent";
import DeliveryBed from "@/components/products/DeliveryBed";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DeliveryBedPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DeliveryBed /> 
    </>  
  );
} 
