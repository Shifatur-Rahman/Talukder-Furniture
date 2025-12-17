
import MetaComponent from "@/components/common/MetaComponent";
import HospitalBed from "@/components/products/HospitalBed";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function HospitalBedPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <HospitalBed /> 
    </>  
  );
} 
