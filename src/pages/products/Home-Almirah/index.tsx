
import MetaComponent from "@/components/common/MetaComponent";
import HomeAlmirah from "@/components/products/HomeAlmirah";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function HomeAlmirahPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <HomeAlmirah /> 
    </>  
  );
} 
