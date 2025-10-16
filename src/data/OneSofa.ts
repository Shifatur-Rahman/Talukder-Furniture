
export const oneSofaProducts = [ 

    {
    id: 1,
    delay: "0s",
    title: "One Seater Sofa", 
    imgSrc: "/images/category/office/Sofa/1 Seater/01.jpg", 
    hoverImg: "/images/category/office/Sofa/1 Seater/01.jpg",  
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
    title: "One Seater Sofa", 
    imgSrc: "/images/category/office/Sofa/1 Seater/02.jpg", 
    hoverImg: "/images/category/office/Sofa/1 Seater/02.jpg",  
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





export const oneSofaMain = [...oneSofaProducts].slice( 
  0,
  30
);

export const allOneSofa = [ 
  ...oneSofaProducts, 
]; 
