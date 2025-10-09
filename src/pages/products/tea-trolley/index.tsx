import TeaTrolley from "@/components/products/TeaTrolley";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function TeaTrolleyPage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <TeaTrolley /> 
    </> 
  ); 
} 

