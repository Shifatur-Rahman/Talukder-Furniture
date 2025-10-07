
import MetaComponent from "@/components/common/MetaComponent";
import ShoeRack from "@/components/products/shoeRack";

const metadata = {
  title: "Shop || Talukder - Office equipment ",
  description: "Talukder - Office equipment",
};


export default function ShoeRackPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ShoeRack /> 
    </>  
  );
} 
