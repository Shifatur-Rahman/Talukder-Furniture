
export const computerTableProducts = [ 

{
    id: 1,
    delay: "0s",
    title: "Computer Table", 
    imgSrc: "/images/category/office/Tables/Computer/01.jpg", 
    hoverImg: "/images/category/office/Tables/Computer/01.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/category/office/Tables/Computer/01.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/category/office/Tables/Computer/01.jpg", 
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
    title: "Computer Table", 
    imgSrc: "/images/category/office/Tables/Computer/02.jpg", 
    hoverImg: "/images/category/office/Tables/Computer/02.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    swatches: [
      {
        label: "Light Blue", 
        bgClass: "bg-light-blue",
        img: "/images/category/office/Tables/Computer/02.jpg", 
      },
      {
        label: "Light Blue",
        bgClass: "bg-light-blue-2",
        img: "/images/category/office/Tables/Computer/02.jpg", 
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





export const computerTableMain = [...computerTableProducts].slice( 
  0,
  30
); 

export const allComputerTable = [ 
  ...computerTableProducts, 
]; 
