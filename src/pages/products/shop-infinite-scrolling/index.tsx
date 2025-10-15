import Products6 from "@/components/products/Products6";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || Talukder Furniture - Office equipment",
  description: "Talukder Furniture - Office equipment",
};

export default function ShopInfiniteScrollPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products6 />
    </>
  );
}
