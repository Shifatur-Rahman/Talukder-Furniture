import { Link, useLocation } from "react-router-dom";

import {
  blogLinks,
  demoPages,
  otherPages,
  shopDetailPages,
  shopPages,
} from "@/data/menu";

type NavProps = {
  textColor?: string;
};

type MenuLink = {
  href: string;
  label?: string;
  src?: string;
  alt?: string;
  name?: string;
};

type MenuGroup = {
  title: string;
  links: MenuLink[];
};
 
type DemoPage = { 
  href: string;
  src: string;
  alt: string;
  name: string;
};

export default function Nav({ textColor = "" }: NavProps) { 
  const { pathname } = useLocation();

  const isMenuActive = (link: MenuLink): boolean => {
    return link.href?.split("/")[1] === pathname.split("/")[1];
  };

  const isMenuParentActive = (menu: MenuLink[]): boolean => {
    return menu.some((elm) => isMenuActive(elm));
  }; 

  const isMenuParentActive2 = (menu: MenuGroup[]): boolean => { 
    return menu.some((elm) => isMenuParentActive(elm.links)); 
  }; 
 
  return (
    <>
      {/* SHOP MENU */}
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive2(shopPages) ? "active" : ""
          } ${textColor}`}
        >
          Office Furniture 
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-1">
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                <div className="mega-menu-item">
                  <div className="list-categories-inner">
                    <div className="menu-heading text-title">
                      Browse Categories
                    </div>
                    <ul>
                      {[
                        "Ergonomic Furniture(2)",
                        "Storage Solutions(11)", 
                        "Office Supplies(7)", 
                        "Tech Accessories(4)",
                        "Office Furniture(20)",
                        "Ergonomic Equipment(4)",
                      ].map((text, index) => (
                        <li key={index}>
                          <Link
                            to="/shop-default"
                            className="categories-item text_secondary" 
                          > 
                            <span className="inner-left">{text}</span> 
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="box-cate-bottom">
                      <Link to="/shop-default" className="btn-line">
                        <span>View All Products </span>
                        <i className="icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                {shopPages.map((menu, index) => (
                  <div className="mega-menu-item" key={index}>
                    <div className="menu-heading text-title">{menu.title}</div>
                    <ul className="menu-list">
                      {menu.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            to={link.href}
                            className={`menu-link-text text_secondary link ${
                              isMenuActive(link) ? "active" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="mega-menu-item">
                  <div className="collection-position style-2">
                    <div className="img-style">
                      <img
                        className="lazyload effect-paralax opacity-100"
                        data-src="/images/banner/banner-1.jpg"
                        alt="banner-cls"
                        src="/images/banner/banner-1.jpg"
                        width={1891}
                        height={1891}
                      />
                    </div>
                    <div className="content cls-content">
                      <div className="cls-heading">
                        <h4 className="text_white">Elevate Your Office</h4>
                        <p className="text_white">Stylish office decor</p>
                      </div>
                      <Link to="/shop-default" className="tf-btn btn-white">
                        Explore Collection
                        <i className="icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* PRODUCTS MENU */} 
      <li className="menu-item"> 
        <a 
          href="#"
          className={`item-link ${
            isMenuParentActive2(shopDetailPages) ? "active" : ""
          } ${textColor}`}
        >
          Living Room 
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-1">
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                <div className="mega-menu-item">
                  <div className="list-categories-inner">
                    <div className="menu-heading text-title">
                      Browse Categories
                    </div>
                    <ul>
                      {[
                        "Lighting Solutions(9)",
                        "Cleaning Supplies(15)",
                        "Printing & Paper(2)",
                        "Top 100 Offers(100)",
                        "New Arrivals(30)",
                        "Value of the Day(31)", 
                      ].map((text, index) => (
                        <li key={index}>
                          <Link
                            to="/shop-default"
                            className="categories-item text_secondary"
                          >
                            <span className="inner-left">{text}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="box-cate-bottom">
                      <Link to="/shop-default" className="btn-line">
                        <span>View All Products </span>
                        <i className="icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                {shopDetailPages.map((group, index) => (
                  <div className="mega-menu-item" key={index}>
                    <ul className="menu-list">
                      {group.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            to={link.href}
                            className={`menu-link-text text_secondary link ${
                              isMenuActive(link) ? "active" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="mega-menu-item">
                  <div className="collection-position hover-img style-4">
                    <Link to="/product-detail/1" className="img-style w-100">
                      <img
                        className="lazyload"
                        data-src="/images/banner/collections-1.jpg"
                        alt="banner-cls"
                        src="/images/banner/collections-1.jpg"
                        width={657}
                        height={877}
                      />
                    </Link>
                    <div className="content cls-content">
                      <h6>
                        <Link to="/product-detail/1" className="link">
                          Desks
                        </Link>
                      </h6>
                      <h6>25 products</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* PRODUCTS MENU */}
      <li className="menu-item">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive2(shopDetailPages) ? "active" : ""
          } ${textColor}`}
        >
          Dinning Room
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu mega-menu mega-menu-1">
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                <div className="mega-menu-item">
                  <div className="list-categories-inner">
                    <div className="menu-heading text-title">
                      Browse Categories
                    </div>
                    <ul>
                      {[
                        "Lighting Solutions(9)",
                        "Cleaning Supplies(15)",
                        "Printing & Paper(2)",
                        "Top 100 Offers(100)",
                        "New Arrivals(30)",
                        "Value of the Day(31)",
                      ].map((text, index) => (
                        <li key={index}>
                          <Link
                            to="/shop-default"
                            className="categories-item text_secondary"
                          >
                            <span className="inner-left">{text}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="box-cate-bottom">
                      <Link to="/shop-default" className="btn-line">
                        <span>View All Products </span>
                        <i className="icon-arrow-up-right" />
                      </Link>
                    </div>
                  </div>
                </div>

                {shopDetailPages.map((group, index) => (
                  <div className="mega-menu-item" key={index}>
                    <ul className="menu-list">
                      {group.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            to={link.href}
                            className={`menu-link-text text_secondary link ${
                              isMenuActive(link) ? "active" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul> 
                  </div> 
                ))} 
  
                <div className="mega-menu-item"> 
                  <div className="collection-position hover-img style-4"> 
                    <Link to="/product-detail/1" className="img-style w-100"> 
                      <img 
                        className="lazyload" 
                        data-src="/images/banner/collections-1.jpg"
                        alt="banner-cls"
                        src="/images/banner/collections-1.jpg"
                        width={657}
                        height={877}
                      />
                    </Link>
                    <div className="content cls-content">
                      <h6>
                        <Link to="/product-detail/1" className="link">
                          Desks
                        </Link>
                      </h6>
                      <h6>25 products</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* BLOGS MENU */}
      <li className="menu-item position-relative">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive(blogLinks) ? "active" : "" 
          } ${textColor}`}
        >
          Bedroom
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {blogLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.href}
                  className={`menu-link-text ${
                    isMenuActive(link) ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* PAGES MENU */}
      <li className="menu-item position-relative">
        <a
          href="#"
          className={`item-link ${
            isMenuParentActive(otherPages) ? "active" : "" 
          } ${textColor}`}
        >
          PAGES
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {otherPages.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`menu-link-text ${
                    isMenuActive(link) ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* DEMOS MENU hello */} 
      
      {/* <li className="menu-item">
        <a
          href="#"
          className={`item-link ${textColor} ${
            isMenuParentActive(demoPages) ? "active" : ""
          }`}
        >
          DEMOS
          <i className="icon icon-down" />
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row-demo">
              {demoPages.map((demo: DemoPage, index) => (
                <div
                  className={`demo-item ${isMenuActive(demo) ? "active" : ""}`}
                  key={index}
                >
                  <Link to={demo.href}>
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src={demo.src}
                        src={demo.src}
                        alt={demo.alt}
                        width={432}
                        height={520}
                      />
                    </div>
                    <div className="demo-name">{demo.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li> */}

    </>
  );
}
