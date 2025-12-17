
import MetaComponent from "@/components/common/MetaComponent";
import OtBed from "@/components/products/OtBed";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function OtBedPage() { 
  return (
    <> 

      <MetaComponent meta={metadata} /> 
      <OtBed />  

    </>  
  );
} 
 