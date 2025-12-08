
import MetaComponent from "@/components/common/MetaComponent";
import DisplayShelf from "@/components/products/DisplayShelf";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DisplayShelfPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DisplayShelf /> 
    </>  
  );
} 
