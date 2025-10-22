"use client";

import { useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number | null;
  options: string[];
  checked: boolean;
};

const productsData: Product[] = [
  {
    id: 1,
    title: "Double Standing Desk",
    image: "/images/shop/product-10.jpg",
    price: 59.99,
    compareAtPrice: 79.99,
    options: ["Green, B", "Green, L"],
    checked: true,
  }, 
  { 
    id: 2,
    title: "Office Desk",
    image: "/images/shop/product-4.jpg",
    price: 59.99,
    compareAtPrice: 79.99,
    options: ["Green, B", "Green, L"],
    checked: true,
  },
  {
    id: 3,
    title: "Duo Standing Desk",
    image: "/images/shop/product-11.jpg",
    price: 59.99,
    compareAtPrice: 69.99,
    options: ["Green, B", "Green, L"],
    checked: false,
  },
];

export default function BoughtTogether2() {
  const [selectedProducts, setSelectedProducts] =
    useState<Product[]>(productsData);

  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const totalPrice = selectedProducts
    .filter((p) => p.checked)
    .reduce((sum, p) => sum + p.price, 0)
    .toFixed(2);

  const totalCompare = selectedProducts
    .filter((p) => p.checked && p.compareAtPrice)
    .reduce((sum, p) => sum + (p.compareAtPrice || 0), 0)
    .toFixed(2);

  const discount =
    parseFloat(totalCompare) > 0
      ? Math.round(
          ((parseFloat(totalCompare) - parseFloat(totalPrice)) /
            parseFloat(totalCompare)) *
            100
        )
      : 0;

  return (
    <div className="frequently-bought-together-2">
      <form className="form-bundle-product type-cols">
        <h5>Frequently bought together</h5>
        <div className="tf-bundle-products-wrap">
          {selectedProducts.map((product) => (
            <div className="tf-bundle-product-item" key={product.id}>
              <input
                className="tf-check"
                type="checkbox"
                checked={product.checked}
                onChange={() => handleCheckboxChange(product.id)}
              />
              <div className="tf-product-bundle-image">
                <a href="#">
                  <img alt="" src={product.image} width={600} height={600} />
                </a>
              </div>
              <div className="tf-product-bundle-infos">
                <div className="text-title">{product.title}</div>
                <div className="tf-product-bundle-variant tf-select">
                  <select>
                    {product.options.map((opt, index) => (
                      <option key={index}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="tf-product-info-price type-small">
                  <h5 className="price-on-sale">${product.price.toFixed(2)}</h5>
                  {product.compareAtPrice && (
                    <>
                      <div className="compare-at-price">
                        ৳ {product.compareAtPrice.toFixed(2)}
                      </div>
                      <div className="badges-on-sale">
                        -
                        {Math.round(
                          ((product.compareAtPrice - product.price) /
                            product.compareAtPrice) *
                            100
                        )}
                        %
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tf-bundle-product-total-submit">
          <h5>Total Price:</h5>
          <div className="tf-product-info-price type-1">
            <h4 className="price-on-sale">${totalPrice}</h4>
            {discount > 0 && (
              <>
                <div className="compare-at-price">${totalCompare}</div>
                <div className="badges-on-sale">-{discount}%</div>
              </>
            )}
          </div>
        </div>

        <a
          href="#shoppingCart"
          data-bs-toggle="modal"
          className="tf-btn btn-onsurface"
        >
          Add selected to cart
        </a>
      </form>
    </div>
  );
}
