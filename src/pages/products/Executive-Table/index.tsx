
import MetaComponent from "@/components/common/MetaComponent";
import ExecutiveTable from "@/components/products/ExecutiveTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ExecutiveTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ExecutiveTable /> 
    </>  
  );
} 
