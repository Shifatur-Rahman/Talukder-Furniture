import CoffeeTable from "@/components/products/CoffeeTable";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};

export default function CoffeeTablePage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <CoffeeTable /> 
    </> 
  ); 
} 

