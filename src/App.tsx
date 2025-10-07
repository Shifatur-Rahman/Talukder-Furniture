import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Common Components
const LayoutWrapper = lazy(
  () => import("@/components/common/GlobalEffectsProvider")
);
const ScrollTop = lazy(() => import("@/components/common/ScrollTop"));
const MobileMenu = lazy(() => import("@/components/modals/MobileMenu"));
const Context = lazy(() => import("@/context/Context"));
const Categories = lazy(() => import("@/components/modals/Categories"));
const Compare = lazy(() => import("@/components/modals/Compare"));
const QuickView = lazy(() => import("@/components/modals/QuickView"));
const Search = lazy(() => import("@/components/modals/Search"));
const ShoppingCart = lazy(() => import("@/components/modals/ShoppingCart"));
const SizeGuide = lazy(() => import("@/components/modals/SizeGuide"));
const QuestionModal = lazy(() => import("@/components/modals/QuestionModal"));
const SeliveryReturn = lazy(() => import("@/components/modals/SeliveryReturn"));
const Share = lazy(() => import("@/components/modals/Share"));
const Toolbar = lazy(() => import("@/components/headers/Toolbar"));
const SidebarAccount = lazy(() => import("@/components/modals/SidebarAccount")); 

// Pages
const HomePage = lazy(() => import("./pages")); 
const Homepage2 = lazy(() => import("./pages/homes/home-2"));
const Homepage3 = lazy(() => import("./pages/homes/home-3")); 
const Homepage4 = lazy(() => import("./pages/homes/home-4")); 
const Homepage5 = lazy(() => import("./pages/homes/home-5")); 

// Product Pages 
const ProductLayout = lazy(() => import("./pages/products/layout")); 
const ShopDefaultPage = lazy(() => import("./pages/products/shop-default")); 
const SofaSetPage = lazy(() => import("./pages/products/sofa-set")); 
const ShopListPage = lazy(() => import("./pages/products/shop-list")); 
const ShopFullGridPage = lazy(() => import("./pages/products/shop-full-grid")); 
const ShopFullListPage = lazy(() => import("./pages/products/shop-full-list")); 
const ShopSidebarLeftPage = lazy(
  () => import("./pages/products/shop-sidebar-left")
);
const ShopSidebarRightPage = lazy(
  () => import("./pages/products/shop-sidebar-right")
);
const ShopFilterCanvasPage = lazy(
  () => import("./pages/products/shop-filter-canvas")
);
const ShopFilterDropdownPage = lazy(
  () => import("./pages/products/shop-filter-dropdown")
);
const ShopFilterSidebarPage = lazy(
  () => import("./pages/products/shop-filter-sidebar")
);
const ShopPaginationPage = lazy(
  () => import("./pages/products/shop-pagination")
);
const ShopLoadButtonPage = lazy(
  () => import("./pages/products/shop-load-button")
);
const ShopInfiniteScrollPage = lazy(
  () => import("./pages/products/shop-infinite-scrolling")
);
const ProductStylePage1 = lazy(
  () => import("./pages/products/product-style-01")
);
const ProductStylePage2 = lazy(
  () => import("./pages/products/product-style-02")
);
const ProductStylePage3 = lazy(
  () => import("./pages/products/product-style-03")
);
const ProductStylePage4 = lazy(
  () => import("./pages/products/product-style-04")
);
const ProductStylePage5 = lazy(
  () => import("./pages/products/product-style-05")
);

// Other Pages
const ShppingCartPage = lazy(() => import("./pages/otherPages/shopping-cart"));
const CheckoutPage = lazy(() => import("./pages/otherPages/checkout"));
const OrderPage = lazy(() => import("./pages/otherPages/order"));
const LoginPage = lazy(() => import("./pages/otherPages/login"));
const RegisterPage = lazy(() => import("./pages/otherPages/register"));
const WishListPage = lazy(() => import("./pages/otherPages/wish-list"));
const SearchResultPage = lazy(() => import("./pages/otherPages/search-result"));
const AboutPage = lazy(() => import("./pages/otherPages/about"));
const FaqsPage = lazy(() => import("./pages/otherPages/faqs"));
const StoreListPage = lazy(() => import("./pages/otherPages/store-list"));
const TermsOfUsePage = lazy(() => import("./pages/otherPages/term-of-use"));
const ContactPage = lazy(() => import("./pages/otherPages/contact"));

// Shop Details Pages
const ProductDetailPage = lazy(
  () => import("./pages/shop-details/product-detail")
);
const ProductsThumbnailRightPage = lazy(
  () => import("./pages/shop-details/product-thumbnails-right")
);
const ProductThumbnainBottomPage = lazy(
  () => import("./pages/shop-details/product-thumbnails-bottom")
);
const ProductGridPage1 = lazy(
  () => import("./pages/shop-details/product-grid-1")
);
const ProductGridPage2 = lazy(
  () => import("./pages/shop-details/product-grid-2")
);
const ProductStackedPage = lazy(
  () => import("./pages/shop-details/product-stacked")
);
const ProductDescriptionAccordionPage = lazy(
  () => import("./pages/shop-details/product-description-accordion")
);
const ProductDescriptionListPage = lazy(
  () => import("./pages/shop-details/product-description-list")
);
const ProductSwatchImagePage = lazy(
  () => import("./pages/shop-details/product-swatch-image")
);
const ProductSwatchImageRoundedPage = lazy(
  () => import("./pages/shop-details/product-swatch-image-rounded")
);
const ProductSwatchDropdownPage = lazy(
  () => import("./pages/shop-details/product-swatch-dropdown")
);
const ProductSwatchDropdownColorPage = lazy(
  () => import("./pages/shop-details/product-swatch-dropdown-color")
);
const ProductBoughtTogetherPage = lazy(
  () => import("./pages/shop-details/product-bought-together")
);
const ProductBoughtTogetherPage2 = lazy(
  () => import("./pages/shop-details/product-bought-together-2")
);
const ProductUpSellPage = lazy(
  () => import("./pages/shop-details/product-up-sell")
);
const ProductPreOrderPage = lazy(
  () => import("./pages/shop-details/product-pre-order")
);
const ProductGroupedPage = lazy(
  () => import("./pages/shop-details/product-grouped")
);
const ProductOutofStockPage = lazy(
  () => import("./pages/shop-details/product-out-of-stock")
);
const ProductPickupAvailabblePage = lazy(
  () => import("./pages/shop-details/product-pickup-available")
);
const ProductExtarnalPage = lazy(
  () => import("./pages/shop-details/product-external")
);
const ShopDetailsLayout = lazy(() => import("./pages/shop-details/layout"));

// Blog Pages
const BlogGridPage = lazy(() => import("./pages/blogs/blog-grid"));
const BlogListPage = lazy(() => import("./pages/blogs/blog-list"));
const BlogDetailsPage = lazy(() => import("./pages/blogs/blog-details"));

// Dashboard Pages
const MyAccountPage = lazy(() => import("./pages/dashboard/my-account"));
const MyAccountAddressPage = lazy(
  () => import("./pages/dashboard/my-account-address")
);
const MyAccountOrdersPage = lazy(
  () => import("./pages/dashboard/my-account-orders")
);
const MyAccountOrdersDetails = lazy(
  () => import("./pages/dashboard/my-account-orders-details")
);

function App() {
  return (
    <>
      <div id="wrapper">
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ height: "100vh" }}
            >
              <h2>Something went wrong.</h2>
              <pre style={{ color: "red" }}>{error.message}</pre>
              <button
                className="btn btn-primary mt-3"
                onClick={resetErrorBoundary}
              >
                Try again
              </button>
            </div>
          )}
        > 
          <Suspense
            fallback={
              <div
                className="position-fixed top-0 start-0 h-100 d-flex justify-content-center align-items-center bg-white"
                style={{ zIndex: 1050, width: "100vw" }}
              >
                <div
                  className="spinner-border text-primary"
                  role="status"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <LayoutWrapper>
              <Context>
                <Routes>
                  <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="home-2" element={<Homepage2 />} />
                    <Route path="home-3" element={<Homepage3 />} />
                    <Route path="home-4" element={<Homepage4 />} />
                    <Route path="home-5" element={<Homepage5 />} /> 
 
                    <Route
                      path="shop-default" 
                      element={
                        <ProductLayout> 
                          <ShopDefaultPage /> 
                        </ProductLayout> 
                      } 
                    />

                    {/* md-ceo table */}

                    
                    <Route
                      path="md-ceo-table"
                      element={
                        <ProductLayout>
                          <SofaSetPage /> 
                        </ProductLayout>
                      }
                    />
                    {/* md-ceo table */}




                    <Route
                      path="shop-list"
                      element={
                        <ProductLayout>
                          <ShopListPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-full-grid"
                      element={
                        <ProductLayout>
                          <ShopFullGridPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-full-list"
                      element={
                        <ProductLayout>
                          <ShopFullListPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-sidebar-left"
                      element={
                        <ProductLayout>
                          <ShopSidebarLeftPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-sidebar-right"
                      element={
                        <ProductLayout>
                          <ShopSidebarRightPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-filter-canvas"
                      element={
                        <ProductLayout>
                          <ShopFilterCanvasPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-filter-dropdown"
                      element={
                        <ProductLayout>
                          <ShopFilterDropdownPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-filter-sidebar"
                      element={
                        <ProductLayout>
                          <ShopFilterSidebarPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-pagination"
                      element={
                        <ProductLayout>
                          <ShopPaginationPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-load-button"
                      element={
                        <ProductLayout>
                          <ShopLoadButtonPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="shop-infinite-scrolling"
                      element={
                        <ProductLayout>
                          <ShopInfiniteScrollPage />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="product-style-01"
                      element={
                        <ProductLayout>
                          <ProductStylePage1 />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="product-style-02"
                      element={
                        <ProductLayout>
                          <ProductStylePage2 />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="product-style-03"
                      element={
                        <ProductLayout>
                          <ProductStylePage3 />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="product-style-04"
                      element={
                        <ProductLayout>
                          <ProductStylePage4 />
                        </ProductLayout>
                      }
                    />
                    <Route
                      path="product-style-05"
                      element={
                        <ProductLayout>
                          <ProductStylePage5 />
                        </ProductLayout>
                      }
                    />
                  </Route>

                  <Route path="shopping-cart" element={<ShppingCartPage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                  <Route path="order" element={<OrderPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="wish-list" element={<WishListPage />} />
                  <Route path="search-result" element={<SearchResultPage />} />
                  <Route path="my-account" element={<MyAccountPage />} />
                  <Route
                    path="my-account-address"
                    element={<MyAccountAddressPage />}
                  />
                  <Route
                    path="my-account-orders"
                    element={<MyAccountOrdersPage />}
                  />
                  <Route
                    path="my-account-orders-details"
                    element={<MyAccountOrdersDetails />}
                  />

                  <Route
                    path="product-detail/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductDetailPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-thumbnails-right/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductsThumbnailRightPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-thumbnails-bottom/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductThumbnainBottomPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-grid-1/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductGridPage1 />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-grid-2/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductGridPage2 />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-stacked/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductStackedPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-description-accordion/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductDescriptionAccordionPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-description-list/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductDescriptionListPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-swatch-image/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductSwatchImagePage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-swatch-image-rounded/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductSwatchImageRoundedPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-swatch-dropdown/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductSwatchDropdownPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-swatch-dropdown-color/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductSwatchDropdownColorPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-bought-together/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductBoughtTogetherPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-bought-together-2/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductBoughtTogetherPage2 />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-up-sell/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductUpSellPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-pre-order/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductPreOrderPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-grouped/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductGroupedPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-out-of-stock/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductOutofStockPage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-pickup-available/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductPickupAvailabblePage />
                      </ShopDetailsLayout>
                    }
                  />
                  <Route
                    path="product-external/:id"
                    element={
                      <ShopDetailsLayout>
                        <ProductExtarnalPage />
                      </ShopDetailsLayout>
                    }
                  />

                  <Route path="blog-grid" element={<BlogGridPage />} />
                  <Route path="blog-list" element={<BlogListPage />} />
                  <Route
                    path="blog-details/:id"
                    element={<BlogDetailsPage />}
                  />

                  <Route path="about" element={<AboutPage />} />
                  <Route path="faqs" element={<FaqsPage />} />
                  <Route path="store-list" element={<StoreListPage />} />
                  <Route path="term-of-use" element={<TermsOfUsePage />} />
                  <Route path="contact" element={<ContactPage />} />
                </Routes>

                <Toolbar />
                <MobileMenu />
                <Categories />
                <Compare />
                <QuickView />
                <Search />
                <ShoppingCart />
                <SizeGuide />
                <ScrollTop />
                <QuestionModal />
                <SeliveryReturn />
                <Share />
                <SidebarAccount />
              </Context>
            </LayoutWrapper>{" "}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
