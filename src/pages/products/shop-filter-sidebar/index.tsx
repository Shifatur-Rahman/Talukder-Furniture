import Products2 from "@/components/products/Products2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ShopFilterSidebarPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products2 />
    </>
  );
}
