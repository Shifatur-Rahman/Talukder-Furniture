
import MetaComponent from "@/components/common/MetaComponent";
import ComputerTable from "@/components/products/ComputerTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ComputerTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ComputerTable /> 
    </>  
  );
} 
