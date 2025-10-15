
import MetaComponent from "@/components/common/MetaComponent";
import ConferenceTable from "@/components/products/ConferenceTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function ConferenceTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <ConferenceTable /> 
    </>  
  );
} 
