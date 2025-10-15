import Products5 from "@/components/products/Products5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ShopLoadButtonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products5 />
    </>
  );
}
