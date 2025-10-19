import Products1 from "@/components/products/Products1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ProductStylePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products1 />
    </>
  );
}
