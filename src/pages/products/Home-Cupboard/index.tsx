
import MetaComponent from "@/components/common/MetaComponent";
import HomeCupboard from "@/components/products/HomeCupboard";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function HomeCupboardPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <HomeCupboard /> 
    </>  
  );
} 
