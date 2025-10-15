import Products3 from "@/components/products/Products3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ShopSidebarRightPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products3 />
    </>
  );
}
