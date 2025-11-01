
import MetaComponent from "@/components/common/MetaComponent";
import BedRoomSet from "@/components/products/BedRoomSet";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function BedRoomPage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <BedRoomSet /> 
    </>  
  );
} 
