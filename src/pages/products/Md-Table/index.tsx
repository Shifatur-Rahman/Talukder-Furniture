
import MetaComponent from "@/components/common/MetaComponent";
import MdTable from "@/components/products/MdTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function MdTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <MdTable /> 
    </>  
  );
} 
