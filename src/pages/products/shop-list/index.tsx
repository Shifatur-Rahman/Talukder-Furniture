import Products1 from "@/components/products/Products1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder - Office equipment eCommerce",
  description: "Talukder - Office equipment eCommerce",
};

export default function ShopListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products1 defaultActiveLayout={1} /> 
    </> 
  ); 
}
