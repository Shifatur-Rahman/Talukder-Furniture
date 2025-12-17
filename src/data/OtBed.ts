
export const otBedProducts = [ 

 {
    id: 1,
    delay: "0s",
    title: "OT Bed", 
    imgSrc: "/images/category/Hospital/OT bed/1.png", 
    hoverImg: "/images/category/Hospital/OT bed/1.png", 
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





export const otBedMain = [...otBedProducts].slice( 
  0,
  30
);

export const allOtBed = [ 
  ...otBedProducts, 
]; 
