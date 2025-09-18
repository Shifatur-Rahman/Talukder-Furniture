// Optimized reducer with filtering handled inside the reducer
import { productMain } from "@/data/products";
import type { FilterState, Product } from "@/types/product";

export type FilterAction =
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_SIZE"; payload: string }
  | { type: "SET_AVAILABILITY"; payload: string }
  | { type: "SET_BRANDS"; payload: string[] }
  | { type: "SET_CATEGORIES"; payload: string[] }
  | { type: "FILTER_PRODUCTS"; payload: Product[] }
  | { type: "SET_SORTING_OPTION"; payload: string }
  | { type: "SORT_PRODUCTS" }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "TOGGLE_FILTER_ON_SALE" }
  | { type: "SET_ITEM_PER_PAGE"; payload: number }
  | { type: "CLEAR_FILTER" };

export const initialState: FilterState = {
  price: [20, 300],
  availability: "All",
  color: "All",
  size: "All",
  activeFilterOnSale: false,
  brands: [],
  categories: [],
  filtered: productMain,
  sortingOption: "Sort by (Default)",
  sorted: productMain,
  currentPage: 1,
  itemPerPage: 6,
};

function matchesAllFilters(product: Product, state: FilterState): boolean {
  if (
    state.brands.length &&
    !state.brands.every((b) => product.filterBrands?.includes(b))
  )
    return false;
  if (
    state.categories.length &&
    !state.categories.every((c) => product.filterCategory?.includes(c))
  )
    return false;
  if (
    state.availability !== "All" &&
    state.availability === "InStock" &&
    !product.inStock
  )
    return false;
  if (
    state.availability !== "All" &&
    state.availability === "OutOfStock" &&
    product.inStock
  )
    return false;
  if (state.color !== "All" && !product.filterColor?.includes(state.color))
    return false;
  if (
    state.size !== "All" &&
    state.size !== "Free Size" &&
    !product.filterSizes?.includes(state.size)
  )
    return false;
  if (state.activeFilterOnSale && !product.oldPrice) return false;
  if (product.price < state.price[0] || product.price > state.price[1])
    return false;
  return true;
}

export function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };
    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "FILTER_PRODUCTS": {
      const productsToFilter = [...action.payload]; // ensures immutability
      const filtered = productsToFilter.filter((product) =>
        matchesAllFilters(product, state)
      );
      return { ...state, filtered };
    }
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SORT_PRODUCTS": {
      const sorted = [...state.filtered];
      switch (state.sortingOption) {
        case "Price Ascending":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "Price Descending":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "Title Ascending":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Title Descending":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
      return { ...state, sorted, currentPage: 1 };
    }
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload, currentPage: 1 };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: [20, 300],
        availability: "All",
        color: "All",
        size: "All",
        brands: [],
        categories: [],
        activeFilterOnSale: false,
      };
    default:
      return state;
  }
}
