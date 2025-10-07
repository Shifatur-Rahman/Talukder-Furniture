export const sofaProducts = [ 

    {
    id: 1,
    delay: "0s",
    title: "Sofa 111", 
    imgSrc: "/images/shop/product-1.jpg", 
    hoverImg: "/images/shop/product-1.1.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/shop/product-1.1.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/shop/product-1.1.jpg",
      },
    ],
    filterBrands: ["Nike", "Louis Vuitton", "Zalando", "Adidas"], 
    inStock: true,
    filterColor: ["Beige", "Orange", "Green", "Black", "Purple", "Dark Blue"],
    filterCategory: ["Bags", "Clothing", "Women", "Shoes", "Uncategorized"],
    filterSizes: ["XS", "L", "XL", "2XL", "3XL"],
    tabFilterOptions2: ["New Arrivals", "On Sale"],
    tabFilterOptions: ["Bottoms", "Skirts", "Dresses", "Sale"],
  },
  {
    id: 2,
    delay: "0.1s",
    title: "Sofa 222",
    imgSrc: "/images/shop/product-2.jpg",
    hoverImg: "/images/shop/product-2.1.jpg", 
    price: 100,
    // oldPrice: 98,
    sale: "-25%",
    swatches: [ 
      {
        label: "Light Blue",
        bgClass: "bg-light-blue",
        img: "/images/shop/product-2.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/shop/product-2.1.jpg",
      },
    ],
    filterBrands: ["Nike", "Zalando", "Adidas"],
    inStock: false,
    filterColor: ["Pink", "Green", "Grey", "Light Blue", "Dark Blue"],
    filterCategory: ["Bags", "Women", "Men", "Shoes", "Uncategorized"],
    filterSizes: ["XS", "L", "XL", "2XL", "3XL"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
    tabFilterOptions: ["Bottoms", "On pieces", "Tops", "Sale"],
  }, 
  {
    id: 3,
    delay: "0.2s",
    title: "Sofa 333",
    imgSrc: "/images/shop/product-3.jpg",
    hoverImg: "/images/shop/product-3.1.jpg", 
    price: 100,
    oldPrice: 98,
    sale: "-25%",
    swatches: [
      {
        label: "Light Orange",
        bgClass: "bg-light-orange",
        img: "/images/shop/product-3.jpg",
      },
      {
        label: "Light Grey",
        bgClass: "bg-light-grey",
        img: "/images/shop/product-3.1.jpg",
      },
    ],
    filterBrands: ["Hermes", "Gucci", "Zalando", "Adidas"],
    inStock: true,
    filterColor: [
      "Pink",
      "Red",
      "Beige",
      "Orange",

      "Grey",
      "Light Blue",
      "Dark Blue",
    ],
    filterCategory: ["Bags", "Booking", "Clothing", "Women"],
    filterSizes: ["XS", "S", "M", "L", "3XL"],
    tabFilterOptions2: ["New Arrivals", "On Sale"],
    tabFilterOptions: ["Bottoms", "On pieces", "Tops", "Skirts", "Dresses"],
  },
   {
    id: 4,
    delay: "0.3s", 
    title: "Director Table",
    imgSrc: "/images/shop/product-4.jpg",
    hoverImg: "/images/shop/product-4.1.jpg",
    price: 100,
    oldPrice: 180,
    sale: null,
    swatches: [
      { 
        label: "Light Brown",
        bgClass: "bg-light-brown",
        img: "/images/shop/product-4.1.jpg", 
      }, 
      {
        label: "Light Pink",
        bgClass: "bg-light-pink",
        img: "/images/shop/product-4.1.jpg",
      },
      {
        label: "Light Grey",
        bgClass: "bg-dark-grey-2",
        img: "/images/shop/product-4.1.jpg",
      },
    ],
    filterBrands: ["Nike", "Louis Vuitton", "Hermes", "Gucci"],
    inStock: true,
    filterColor: [
      "Pink",
      "Red",

      "Green",
      "Black",
      "White",
      "Purple",
      "Grey",
      "Light Blue",
      "Dark Blue",
    ],
    filterCategory: ["Bags", "Booking", "Clothing", "Uncategorized"],
    filterSizes: ["XS", "S", "M", "2XL", "3XL"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
    tabFilterOptions: ["Bottoms", "On pieces", "Skirts", "Dresses", "Sale"],
  },
]


export const sofaMain = [...sofaProducts].slice( 
  0,
  4
);

export const allSofa = [ 
  ...sofaProducts, 
]; 


