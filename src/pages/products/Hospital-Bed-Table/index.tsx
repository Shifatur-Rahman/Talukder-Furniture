
import MetaComponent from "@/components/common/MetaComponent";
import HospitalBedTable from "@/components/products/HospitalBedTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function HospitalBedTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <HospitalBedTable /> 
    </>  
  );
} 
