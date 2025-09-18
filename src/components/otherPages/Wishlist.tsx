import { useContextElement } from "@/context/Context";
import ProductCard from "../productCards/ProductCard";
import { allProducts } from "@/data/products";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const { wishList } = useContextElement();
  const [items, setItems] = useState(allProducts);
  useEffect(() => {
    setItems([...allProducts.filter((elm) => wishList.includes(elm.id))]);
  }, [wishList]);
  return (
    <section className="flat-spacing pb-0">
      <div className="container">
        <div className="row">
          {items.length ? (
            <div className="col-12">
              <div className="tf-grid-layout tf-col-2 lg-col-4">
                {items.slice(0, 4).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <h5>Your Wishlist is Empty</h5>
          )}
        </div>
      </div>
    </section>
  );
}
