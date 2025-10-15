
export const twoDrawerCabinetProducts = [ 

    {
    id: 1,
    delay: "0s",
    title: "Two Drawer File Cabinet", 
    imgSrc: "/images/category/office/File Cabinet/2 Drawer/01.jpg", 
    hoverImg: "/images/category/office/File Cabinet/2 Drawer/01.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
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
    title: "Two Drawer File Cabinet", 
    imgSrc: "/images/category/office/File Cabinet/2 Drawer/02.jpg", 
    hoverImg: "/images/category/office/File Cabinet/2 Drawer/02.jpg", 
    price: 100,
    oldPrice: null, 
    sale: null,
    filterBrands: ["Nike", "Louis Vuitton", "Zalando", "Adidas"], 
    inStock: true, 
    filterColor: ["Beige", "Orange", "Green", "Black", "Purple", "Dark Blue"], 
    filterCategory: ["Bags", "Clothing", "Women", "Shoes", "Uncategorized"],
    filterSizes: ["XS", "L", "XL", "2XL", "3XL"],
    tabFilterOptions2: ["New Arrivals", "On Sale"],
    tabFilterOptions: ["Bottoms", "Skirts", "Dresses", "Sale"],
  },

]


     


export const twoDrawerCabinetMain = [...twoDrawerCabinetProducts].slice( 
  0,
  5
); 

export const allTwoDrawerCabinet = [
  ...twoDrawerCabinetProducts, 
]; 
