
import MetaComponent from "@/components/common/MetaComponent";
import OfficeAlmirah from "@/components/products/OfficeAlmirah";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function OfficeAlmirahPage() { 
  return (
    <> 

      <MetaComponent meta={metadata} /> 
      <OfficeAlmirah />  

    </>  
  );
} 
 