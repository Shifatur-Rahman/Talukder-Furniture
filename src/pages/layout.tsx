import LayoutWrapper from "@/components/common/GlobalEffectsProvider";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import ScrollTop from "@/components/common/ScrollTop";
import MobileMenu from "@/components/modals/MobileMenu";
import Context from "@/context/Context";
import Categories from "@/components/modals/Categories";
import Compare from "@/components/modals/Compare";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";
import ShoppingCart from "@/components/modals/ShoppingCart";
import SizeGuide from "@/components/modals/SizeGuide";
import QuestionModal from "@/components/modals/QuestionModal";
import SeliveryReturn from "@/components/modals/SeliveryReturn";
import Share from "@/components/modals/Share";
import Toolbar from "@/components/headers/Toolbar";
import SidebarAccount from "@/components/modals/SidebarAccount";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="preload-wrapper">
        <div id="wrapper">
          <LayoutWrapper> 
            <Context>
              {children}
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
          </LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
