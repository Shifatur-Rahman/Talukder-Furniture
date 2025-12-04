import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  cardStyle?: number; 
}

const CARD_STYLES_WITH_CART_ICON = [2, 4];
const CARD_STYLES_WITHOUT_QUICKVIEW = [3, 5];

const ProductCard = React.memo(
  ({ product, cardStyle = 1 }: ProductCardProps) => {
    const {
      addProductToCart,
      isAddedToCartProducts,
      addToCompareItem,
      isAddedtoCompareItem,
      addToWishlist,
      isAddedtoWishlist,
      setQuickViewItem,
    } = useContextElement();

    const [currentImage, setCurrentImage] = useState(""); 

    const isInCart = isAddedToCartProducts(product.id);
    const isInWishlist = isAddedtoWishlist(product.id);
    const isInCompare = isAddedtoCompareItem(product.id);

    const handleAddToCart = useCallback(() => {
      if (product.id) addProductToCart(product.id);
    }, [product.id, addProductToCart]);

    const handleAddToWishlist = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        if (product.id) addToWishlist(product.id);
      },
      [product.id, addToWishlist]
    );

    const handleAddToCompare = useCallback(() => {
      if (product.id) addToCompareItem(product.id);
    }, [product.id, addToCompareItem]);

    const handleQuickView = useCallback(() => {
      if (product) setQuickViewItem(product);
    }, [product, setQuickViewItem]);

    const swatches = useMemo(
      () =>
        product.swatches?.map((swatch, index) => {
          const isActive = currentImage
            ? currentImage === swatch.img
            : index === 0;

          return (
            <li
              key={index}
              className={`list-color-item color-swatch ${
                isActive ? "active" : ""
              }`}
              onMouseOver={() => setCurrentImage(swatch.img)}
            >
              <span className="d-none text-capitalize color-filter">
                {swatch.label}
              </span>
              <span className={`swatch-value ${swatch.bgClass}`} />
              <img
                className="lazyload"
                data-src={swatch.img}
                src={swatch.img}
                alt={swatch.label}
                width={600}
                height={600}
              />
            </li>
          );
        }),
      [product.swatches, currentImage]
    );

    return (
      <div
        className={`card-product style-${cardStyle} wow fadeInUp`}
        data-wow-delay={product.delay}
      >

        
        <div className="card-product-wrapper"> 
          <Link to={`/product-detail/${product.id}`} className="image-wrap">
            <img
              className="lazyload img-product"
              src={currentImage || product.imgSrc}
              alt={product.title}
              width={600}
              height={600}
            /> 
            <img
              className="lazyload img-hover"
              data-src={product.hoverImg}
              src={product.hoverImg}
              alt={product.title}
              width={600}
              height={600}
            />
          </Link> 

          {product.sale && (
            <div className="on-sale-wrap">
              <span className="on-sale-item">{product.sale}</span>
            </div>
          )}

          <div className="list-product-btn">
            {CARD_STYLES_WITH_CART_ICON.includes(cardStyle) && (
              <a
                href="#shoppingCart"
                data-bs-toggle="modal"
                className="box-icon cart"
                onClick={handleAddToCart}
              >
                <span className="icon icon-bag" />
                <span className="tooltip">
                  {isInCart ? "Already Added" : "Add to Cart"}
                </span>
              </a>
            )}

            <button
              onClick={handleAddToWishlist}
              className={`box-icon wishlist btn-icon-action ${
                isInWishlist ? "active" : ""
              }`}
            >
              <span
                className={`icon ${
                  isInWishlist ? "icon-close fs-6" : "icon-heart"
                }`}
              />
              <span className="tooltip">
                {isInWishlist ? "Remove Wishlist" : "Add to Wishlist"}
              </span>
            </button>

            <a
              href="#compare"
              data-bs-toggle="modal"
              className="box-icon compare"
              onClick={handleAddToCompare}
            >
              <span className="icon icon-compare" />
              <span className="tooltip">
                {isInCompare ? "Compared" : "Compare"}
              </span>
            </a> 

            {!CARD_STYLES_WITHOUT_QUICKVIEW.includes(cardStyle) && (
              <a
                href="#quickView"
                data-bs-toggle="modal"
                onClick={handleQuickView}
                className="box-icon quickview tf-btn-loading"
              >
                <span className="icon icon-eye" />
                <span className="tooltip">Quick View</span>
              </a>
            )}
          </div>
    
          {cardStyle !== 2 && cardStyle !== 4 && (
            <div className="list-btn-main">
              {cardStyle === 5 && (
                <a
                  href="#quickView"
                  data-bs-toggle="modal"
                  onClick={handleQuickView}
                  className="btn-main-product btn-quickview"
                >
                  Quick View
                </a>
              )}
              <a
                href="#shoppingCart"
                data-bs-toggle="modal"
                className="btn-main-product"
                onClick={handleAddToCart}
              >
                {isInCart ? "Already Added" : "Add to Cart"}
              </a>
              {cardStyle === 3 && (
                <a
                  href="#quickView"
                  data-bs-toggle="modal"
                  onClick={handleQuickView}
                  className="box-icon quickview tf-btn-loading"
                >
                  <span className="icon icon-eye" />
                  <span className="tooltip">Quick View</span>
                </a>
              )}
            </div>
          )}
        </div> 

        <div className="card-product-info"> 
          <Link
            to={`/product-detail/${product.id}`}
            className="text-title title link"
          >
            {product.title}
          </Link>

          {/* <div className="price text-body-default">
            {product.oldPrice && (
              <span className="text-caption-1 old-price">
                ৳ {product.oldPrice.toFixed(2)}
              </span>
            )}
             ৳ {product.price.toFixed(2)}
          </div> */}

          <ul className="list-color-product">{swatches}</ul>
        </div>
      </div>
    );
  }
);

// $ 

export default ProductCard;
