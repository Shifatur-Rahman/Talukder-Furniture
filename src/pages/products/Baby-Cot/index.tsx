
import MetaComponent from "@/components/common/MetaComponent";
import BabyCot from "@/components/products/BabyCot";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function BabyCotPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <BabyCot /> 
    </>  
  );
} 
