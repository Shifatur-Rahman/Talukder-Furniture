import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import GridView from "./GridView";
import { useEffect, useReducer, useState } from "react";

import { initialState, reducer } from "@/reducer/filterReducer";

// import FilterMeta from "./FilterMeta";
// import FilterModal from "./FilterModal";
import Listview from "./Listview";
import { oneSofaMain } from "@/data/OneSofa"; 
 
// Filter state type (update this to match your reducer state exactly)   
 
// Props for Products1
interface OneSofaProps {
  parentClass?: string;
  defaultActiveLayout?: number; 
  isFullLayout?: boolean; 
  cardStyle?: number; 
}  
 
// console.log("ShoeRackMain products:", mdTableMain); 
 
export default function OneSofa({
  parentClass = "flat-spacing", 
  defaultActiveLayout = 4, 
  isFullLayout = false, 
  cardStyle = 1, 
}: OneSofaProps) {
  const [activeLayout, setActiveLayout] = useState<number>(defaultActiveLayout); 
  const [state, dispatch] = useReducer(reducer, initialState); 
  const {
    availability,
    color,
    size,
    brands,
    categories,
    price,
    sortingOption,
    filtered,
    sorted,
    activeFilterOnSale,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value: [number, number]) =>
      dispatch({ type: "SET_PRICE", payload: value }),

    setColor: (value: string) => {
      value === color
        ? dispatch({ type: "SET_COLOR", payload: "All" })
        : dispatch({ type: "SET_COLOR", payload: value });
    },
    setSize: (value: string) => {
      value === size
        ? dispatch({ type: "SET_SIZE", payload: "All" })
        : dispatch({ type: "SET_SIZE", payload: value });
    },
    setAvailability: (value: string) => {
      value === availability
        ? dispatch({ type: "SET_AVAILABILITY", payload: "All" })
        : dispatch({ type: "SET_AVAILABILITY", payload: value });
    },

    setBrands: (newBrand: string) => {
      const updated = [...brands].includes(newBrand)
        ? [...brands].filter((elm) => elm !== newBrand)
        : [...brands, newBrand];
      dispatch({ type: "SET_BRANDS", payload: updated }); 
    },
    removeBrand: (newBrand: string) => {
      const updated = brands.filter((brand) => brand !== newBrand);
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    setCategories: (newItem: string) => {
      const updated = categories.includes(newItem)
        ? categories.filter((elm) => elm !== newItem)
        : [...categories, newItem];
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    removeCategories: (newItem: string) => {
      const updated = categories.filter((category) => category !== newItem);
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    setSortingOption: (value: string) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    toggleFilterWithOnSale: () => dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
    setCurrentPage: (value: number) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value: number) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      dispatch({ type: "SET_ITEM_PER_PAGE", payload: value }); 
    }, 
    clearFilter: () => { 
      dispatch({ type: "CLEAR_FILTER" }); 
    },
  };
  useEffect(() => {
     dispatch({ type: "FILTER_PRODUCTS", payload: oneSofaMain });
  }, [ 
    price,
    availability,
    color,
    size,
    brands,
    categories,
    activeFilterOnSale,
  ]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [filtered, sortingOption]);

  return (
    <>
      <section className={parentClass}>
        <div className={`container${isFullLayout ? "-full" : ""}`}>
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </a>
              <div
                onClick={allProps.toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${ 
                  activeFilterOnSale ? "active" : ""
                }`}
              >
                <i className="icon icon-checkcircle" />
                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
              />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <Sorting allProps={allProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            {/* <FilterMeta productLength={sorted.length} allProps={allProps} /> */} 
            {activeLayout === 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview products={sorted} />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView cardStyle={cardStyle} products={sorted} />
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <FilterModal allProps={allProps} /> */}
    </>
  );
}
