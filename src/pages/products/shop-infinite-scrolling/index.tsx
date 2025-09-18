import Products6 from "@/components/products/Products6";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Shop || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ShopInfiniteScrollPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Products6 />
    </>
  );
}
