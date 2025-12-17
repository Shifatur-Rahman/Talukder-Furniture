
import MetaComponent from "@/components/common/MetaComponent";
import MedicineTrolley from "@/components/products/MedicineTrolley";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function MedicineTrolleyPage() { 
  return (
    <> 

      <MetaComponent meta={metadata} /> 
      <MedicineTrolley />  

    </>  
  );
} 
 