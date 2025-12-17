// import Sofa221Product from "@/components/products/Sofa221";

import MetaComponent from "@/components/common/MetaComponent";
import SingleStudentTable from "@/components/products/SingleStudentTable";

const metadata = {
  title: "Shop || Talukder - Office equipment eCommerce Reactjs Template",
  description: "Talukder - Office equipment eCommerce Reactjs Template",
};

export default function SingleStudentTablePage() { 
  return (
    <>
      <MetaComponent meta={metadata} /> 
      <SingleStudentTable /> 
    </> 
  );
} 