import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import type { Product } from "@/types/product";

interface LookbookCard2Props {
  product: Product;
}

const LookbookCard2 = React.memo(({ product }: LookbookCard2Props) => {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const isInCart = useMemo(
    () => isAddedToCartProducts(product.id),
    [product.id, isAddedToCartProducts]
  );

  const handleAddToCart = useCallback(() => {
    if (product.id) {
      addProductToCart(product.id);
    }
  }, [product.id, addProductToCart]);

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
          href="#shoppingCart"
          data-bs-toggle="modal"
          className="btn-lookbook btn-line"
          onClick={handleAddToCart}
        >
          {isInCart ? "Already Added" : "Add to Cart"}
        </a>
      </div>
    </div>
  );
});

export default LookbookCard2;
