
import MetaComponent from "@/components/common/MetaComponent";
import ReadingTable from "@/components/products/ReadingTable";

const metadata = {
  title: "Shop || Talukder - Office equipment ",
  description: "Talukder - Office equipment",
};


export default function ReadingTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ReadingTable /> 
    </>  
  );
} 
