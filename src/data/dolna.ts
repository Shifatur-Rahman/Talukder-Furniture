
export const dolnaProducts = [ 
    {
    id: 1,
    delay: "0s",
    title: "Dolna", 
    imgSrc: "/images/category/diningroom/dolna/01.jpg", 
    hoverImg: "/images/category/diningroom/dolna/01.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/category/diningroom/dolna/01.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/category/diningroom/dolna/01.jpg", 
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
    delay: "0s",
    title: "Dolna", 
    imgSrc: "/images/category/diningroom/dolna/02.jpg", 
    hoverImg: "/images/category/diningroom/dolna/02.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/category/diningroom/dolna/02.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/category/diningroom/dolna/02.jpg", 
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
    id: 3,
    delay: "0s",
    title: "Dolna", 
    imgSrc: "/images/category/diningroom/dolna/03.jpg", 
    hoverImg: "/images/category/diningroom/dolna/03.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/category/diningroom/dolna/03.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/category/diningroom/dolna/03.jpg", 
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


]





export const dolnaMain = [...dolnaProducts].slice( 
  0,
  9
);

export const allDolna = [ 
  ...dolnaProducts, 
]; 
