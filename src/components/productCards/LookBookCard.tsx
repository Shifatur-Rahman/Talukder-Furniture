import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import type { Product } from "@/types/product";

interface LookBookCardProps {
  product: Product;
}

const LookBookCard = React.memo(({ product }: LookBookCardProps) => {
  const { setQuickViewItem } = useContextElement();

  const handleQuickView = useCallback(() => {
    setQuickViewItem(product);
  }, [product, setQuickViewItem]);

  return (
    <div className="loobook-product">
      <div className="img-style">
        <img
          alt={product.title}
          src={product.imgSrc}
          width={200}
          height={200}
        />
      </div>

      <div className="content">
        <div className="info">
          <Link
            to={`/product-detail/${product.id}`}
            className="text-title text-line-clamp-1 link"
          >
            {product.title}
          </Link>
          <div className="price text-button">${product.price.toFixed(2)}</div>
        </div>

        <a
          href="#quickView"
          data-bs-toggle="modal"
          onClick={handleQuickView}
          className="btn-lookbook btn-line"
        >
          Quick View
        </a>
      </div>
    </div>
  );
});

export default LookBookCard;
