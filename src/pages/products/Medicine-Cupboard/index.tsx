
import MetaComponent from "@/components/common/MetaComponent";
import MedicineCupboard from "@/components/products/MedicineCupboard";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function MedicineCupboardyPage() { 
  return (
    <> 

      <MetaComponent meta={metadata} /> 
      <MedicineCupboard />  

    </>  
  );
} 
 