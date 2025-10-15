import Products4 from "@/components/products/Products4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ShopFilterDropdownPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products4 />
    </>
  );
}
