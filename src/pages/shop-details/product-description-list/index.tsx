import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions3 from "@/components/productDetails/Descriptions3";
import Details1 from "@/components/productDetails/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import StickyProduct from "@/components/productDetails/StickyProduct";
import { allProducts } from "@/data/products";

import Header1 from "@/components/headers/Header1";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Product Details || GearO - Office equipment eCommerce Reactjs Template",
  description: "GearO - Office equipment eCommerce Reactjs Template",
};

export default function ProductDescriptionListPage() {
  let params = useParams();
  const id = Number(params.id);

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 parentClass="header-default border-bot" />
      <Breadcumb product={product} />
      <Details1 product={product} />
      <Descriptions3 />
      <RelatedProducts />
      <StickyProduct />
    </>
  );
}
