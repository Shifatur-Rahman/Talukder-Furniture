
import MetaComponent from "@/components/common/MetaComponent";
import DressingTable from "@/components/products/DressingTable";

const metadata = {
  title: "Shop || Talukder - Office equipment",
  description: "Talukder - Office equipment",
};


export default function DressingTablePage() { 
  return (
    <> 
      <MetaComponent meta={metadata} /> 
      <DressingTable /> 
      <h1>Hello</h1> 
    </>  
  );
}     
