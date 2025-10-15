import Workstation from "@/components/products/Workstation";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function WorkstationPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <Workstation /> 
    </> 
  );
}

