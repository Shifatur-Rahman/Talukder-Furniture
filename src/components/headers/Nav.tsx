import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; 
import { AiOutlineMinus } from "react-icons/ai";

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

  const [open, setOpen] = useState(false);
 
  return (
    <> 


     {/* Office Furniture */}

       <li
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#" className="item-link">
        Office Furniture <i className="icon icon-down" />
      </a>

      {open && (
        <div className="sub-menu mega-menu mega-menu-1"> 
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                {officeFurnitureMenu.map((menu, index) => (
                  <div className="mega-menu-item" key={index}>
                    <div className="list-categories-inner">
                    <div className="menu-heading text-title">{menu.title} 

                       {/* <i className="fa-solid fa-arrow-right"></i> 
                       <i class="fa-solid fa-arrow-right"></i> */}
                       <FaArrowRight className="arrow-icon" /> 
                    </div>

                    <ul className="menu-list">
                      {menu.links.map((link, idx) => (
                        <li key={idx}>
                          {link.children ? (
                            <>
                              <span className="menu-link-text">
                                {link.label}
                              </span>
                              <ul className="submenu-list">
                                {link.children.map((child, cIdx) => (
                                  
                                  <li key={cIdx}>
                                    <a href={child.href} className="menu-link-text">
                                      <AiOutlineMinus />
                                      {child.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <a href={link.href} className="menu-link-text">
                              {link.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                          Office Items
                        </Link>
                      </h6>
                      <h6>500 products</h6> 
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </li>

      {/* Living Room */} 
      <li
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#" className="item-link">
        Living Room <i className="icon icon-down" />
      </a>

      {open && (
        <div className="sub-menu mega-menu mega-menu-1"> 
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                {livingRoom.map((menu, index) => (
                  <div className="mega-menu-item" key={index}>
                    <div className="list-categories-inner">
                    <div className="menu-heading text-title">{menu.title} 

                       {/* <i className="fa-solid fa-arrow-right"></i> 
                       <i class="fa-solid fa-arrow-right"></i> */} 
                       <FaArrowRight className="arrow-icon" /> 
                    </div>

                     <ul className="menu-list">
                    {menu.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="menu-link-text">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  </div> 
                  </div> 
                ))}

                 <div className="mega-menu-item">
                  <div className="collection-position hover-img style-4">
                    <Link to="/product-detail/1" className="img-style w-100">
                      <img
                        className="lazyload"
                        data-src="/images/banner/collections-2.jpg"
                        alt="banner-cls"
                        src="/images/banner/collections-2.jpg"
                        width={657}
                        height={877}
                      />
                    </Link>
                    <div className="content cls-content">
                      <h6>
                        <Link to="/product-detail/1" className="link">
                          Bedroom Set
                        </Link>
                      </h6>
                      <h6>200 products</h6> 
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </li>


     {/* Dining Room */} 

      <li
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#" className="item-link">
        Dining Room <i className="icon icon-down" /> 
      </a>

      {open && (
        <div className="sub-menu mega-menu mega-menu-1"> 
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                {diningRoom.map((menu, index) => (
                  <div className="mega-menu-item" key={index}>
                    <div className="list-categories-inner">
                    <div className="menu-heading text-title">{menu.title} 

                       {/* <i className="fa-solid fa-arrow-right"></i> 
                       <i class="fa-solid fa-arrow-right"></i> */} 
                       <FaArrowRight className="arrow-icon" /> 
                    </div>

                     <ul className="menu-list">
                    {menu.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="menu-link-text">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  </div> 
                  </div> 
                ))}

                 <div className="mega-menu-item">
                  <div className="collection-position hover-img style-4">
                    <Link to="/product-detail/1" className="img-style w-100">
                      <img
                        className="lazyload"
                        data-src="/images/banner/collections-3.jpg"
                        alt="banner-cls"
                        src="/images/banner/collections-3.jpg"
                        width={657}
                        height={877}
                      />
                    </Link>
                    <div className="content cls-content">
                      <h6>
                        <Link to="/product-detail/1" className="link">
                          Dining Room
                        </Link>
                      </h6>
                      <h6> 100 products</h6> 
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </li>
 
      {/* bedRoomFurniture */} 

   {/*    <li
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#" className="item-link">
        Bedroom <i className="icon icon-down" />
      </a>

      {open && (
        <div className="sub-menu mega-menu mega-menu-1"> 
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                {bedRoomFurnitureMenu.map((menu, index) => (
                  <div className="mega-menu-item" key={index}>
                    <div className="list-categories-inner">
                    <div className="menu-heading text-title">{menu.title} 
                       <FaArrowRight className="arrow-icon" /> 
                    </div>

                    <ul className="menu-list">
                      {menu.links.map((link, idx) => (
                        <li key={idx}>
                          {link.children ? (
                            <>
                              <span className="menu-link-text">
                                {link.label}
                              </span>
                              <ul className="submenu-list">
                                {link.children.map((child, cIdx) => (
                                  
                                  <li key={cIdx}>
                                    <a href={child.href} className="menu-link-text">
                                      <AiOutlineMinus />
                                      {child.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <a href={link.href} className="menu-link-text">
                              {link.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
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
      )}
    </li> */} 


   <li
  className="menu-item"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <a href="#" className="item-link">
    Bedroom <i className="icon icon-down" />
  </a> 

  {open && (
    <div className="sub-menu mega-menu mega-menu-1">
      <div className="container">
        <div className="row-demo-1">
          <div className="mega-menu-list">
            {bedRoomFurnitureMenu.map((menu, index) => (
              <div className="mega-menu-item" key={index}>
                <div className="list-categories-inner">
                  {/* Category Title */}
                  <div className="menu-heading text-title font-bold flex items-center">
                    {menu.title}
                    <FaArrowRight className="arrow-icon ml-2 text-xs" />
                  </div>

                  {/* Links inside Category */}
                  <ul className="menu-list">
                    {menu.links.map((link, idx) => (
                      <li key={idx}>
                        {/* If this link has children → Parent */}
                        {link.children && Array.isArray(link.children) ? (
                          <>
                            <span className="menu-link-text font-semibold flex items-center cursor-default">
                              {link.label}
                              <FaArrowRight className="ml-1 text-[10px]" />
                            </span>
                            <ul className="submenu-list ml-4 mt-1">
                              {link.children.map((child, cIdx) => (
                                <li key={cIdx}>
                                  <Link to={child.href} className="menu-link-text flex items-center">
                                    <AiOutlineMinus className="mr-1" />
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          // Normal clickable link (no children)
                          <Link to={link.href} className="menu-link-text">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Right side promo image */}

            {/* <div className="mega-menu-item">
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
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )}
</li> 
 
          {/* <li 
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="#" className="item-link">
        Bedroom <i className="icon icon-down" />
      </a>

      {open && (
        <div className="sub-menu mega-menu mega-menu-1"> 
          <div className="container">
            <div className="row-demo-1">
              <div className="mega-menu-list">
                 {bedRoomFurnitureMenu.map((menu, index) => (
              <div className="mega-menu-item" key={index}>
            
                <div className="menu-heading font-bold flex items-center">
                  {menu.title} 
                  <FaArrowRight className="ml-2 text-xs" /> 
                </div> 

            
                <ul className="menu-list"> 
                  {menu.links.map((link, idx) => ( 
                    <li key={idx}>
                      {link.children ? (
                        <>
                      
                          <span className="menu-link-text font-semibold flex items-center cursor-default">
                            {link.label}
                            <FaArrowRight className="ml-1 text-[10px]" />
                          </span>

                         
                          <ul className="submenu-list ml-4 mt-1">
                            {link.children.map((child, cIdx) => (
                              <li key={cIdx}>
                                <Link
                                  to={child.href}
                                  className="menu-link-text"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                       
                        <Link to={link.href} className="menu-link-text">
                          {link.label}
                        </Link>
                      )}
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
      )}
    </li> */}

       {/* institutionalFurnitureMenu MENU */} 

       <li
  className="menu-item"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  <a href="#" className="item-link">
    Institutional <i className="icon icon-down" /> 
  </a> 

  {open && (
    <div className="sub-menu mega-menu mega-menu-1">
      <div className="container">
        <div className="row-demo-1">
          <div className="mega-menu-list">
            {institutionalFurnitureMenu.map((menu, index) => (
              <div className="mega-menu-item" key={index}>
                <div className="list-categories-inner">
                  {/* Category Title */}
                  <div className="menu-heading text-title font-bold flex items-center">
                    {menu.title}
                    <FaArrowRight className="arrow-icon ml-2 text-xs" />
                  </div>

                  {/* Links inside Category */}
                  <ul className="menu-list">
                    {menu.links.map((link, idx) => (
                      <li key={idx}>
                        {/* If this link has children → Parent */}
                        {link.children && Array.isArray(link.children) ? (
                          <>
                            <span className="menu-link-text font-semibold flex items-center cursor-default">
                              {link.label}
                              <FaArrowRight className="ml-1 text-[10px]" />
                            </span>
                            <ul className="submenu-list ml-4 mt-1">
                              {link.children.map((child, cIdx) => (
                                <li key={cIdx}>
                                  <Link to={child.href} className="menu-link-text flex items-center">
                                    <AiOutlineMinus className="mr-1" />
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          // Normal clickable link (no children)
                          <Link to={link.href} className="menu-link-text">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Right side promo image */}

            <div className="mega-menu-item">
              <div className="collection-position hover-img style-4">
                <Link to="/product-detail/1" className="img-style w-100">
                  <img
                    className="lazyload"
                    data-src="/images/banner/collections-5.jpg"
                    alt="banner-cls"
                    src="/images/banner/collections-5.jpg"
                    width={657}
                    height={877}
                  />
                </Link>
                <div className="content cls-content">
                  <h6>
                    <Link to="/product-detail/1" className="link">
                      Industrial Rack
                    </Link>
                  </h6>
                  <h6>100 products</h6> 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )}
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


//officeFurniture
export const officeFurnitureMenu = [
  {
    title: "Tables",
     href: "/tables", // route for title
    links: [
      { label: "MD/CEO Table", href: "/md-table" },
      { label: "Executive Table", href: "/executive-table" }, 
      { label: "Side Rack", href: "/side-rack" },
      { label: "Conference Table", href: "/conference-table" },
      { label: "Computer Table", href: "/computer-table" },
    ],
  },
  {
    title: "Chairs",
      href: "/chairs",
    links: [
      {
        label: "Swivel Chair", // parent, no href 
        children: [
          { label: "Low Back Chair", href: "/low-back-chair" },
          { label: "Medium Back Chair", href: "/medium-back-chair" },
          { label: "High Back Chair", href: "/high-back-chair" },
          { label: "Swivel Stool", href: "/swivel-stool" },
        ],
      },
      {
        label: "Fixed Chair", // parent, no href
         href: "/chairs/fixed-chair",
        children: [
          { label: "Visitor's Chair", href: "/visitors-chair" }, 
        ],
      },
    ],
  },
  {
    title: "Office Sofa",
    href: "/office-sofa",
    links: [
      { label: "1 Seater", href: "/sofa-1-seater" },
      { label: "2 Seater", href: "/sofa-2-seater" },
      { label: "3 Seater", href: "/sofa-3-seater" }, 
    ],
  },
  {
    title: "Cabinets",
    href: "/cabinets",
    links: [
      { label: "Office Cupboard", href: "/office-cupboard" },
      { label: "Office Almirah", href: "/office-almirah" },
      { label: "Multi-Purpose Cabinet", href: "/multi-purpose-cabinet" }, 
      {
        label: "Filing Cabinet",
        href: "/cabinets/filing-cabinet",
        children: [
          { label: "2 Drawer Cabinet", href: "/2-drawer" },
          { label: "2 Drawer Cabinet Combined", href: "/2-drawer-combined" },
          { label: "3 Drawer Cabinet", href: "/3-drawer" },
          { label: "3 Drawer Cabinet Combined", href: "/3-drawer-combined" },
          { label: "4 Drawer Cabinet", href: "/4-drawer" },
          { label: "4 Drawer Cabinet Combined", href: "/4-drawer-combined" },
        ],
      },
    ],
  },
  {
    title: "Waiting",
    href: "/waiting",
    links: [
      { label: "Waiting Chair", href: "/waiting-chair" },
      { label: "Auditorium Chair", href: "/auditorium-chair" },
      { label: "Workstation", href: "/workstation" },
      { label: "Waiting Sofa", href: "/waiting-sofa" },
      { label: "Working Desk", href: "/working-desk" },
    ],
  },
]; 

// livingRoom
export const livingRoom = [ 
  {
    title: "Sofa Set",
    links: [
      { label: "Sofa Set 3-1-1", href: "/md-ceo-table" },
      { label: "Sofa Set 3-2-1", href: "/executive-table" }, 
      { label: "Sofa Set 2-2-1", href: "/side-rack" },
      { label: "1 Seater", href: "/conference-table" },
      { label: "2 Seater", href: "/computer-table" },
      { label: "3 Seater", href: "/side-rack" },
      { label: "Divan Sofa", href: "/conference-table" },
      { label: "Sofa Cum Bed", href: "/sofa-cum-bed" }, 
    ],
  },

  {
    title: "Recliner/Rocker",
    links: [
        { label: "Rocking Chair", href: "/md-ceo-table" }, 
    ],
  },

  {
    title: "Accent Chairs",
    links: [
      { label: "Accent Chairs Stool", href: "/sofa-1-seater" },
      { label: "Folding Chair", href: "/sofa-2-seater" },
    ],
  },

  {
    title: "Accent Tables",
    links: [
      { label: "Center Table", href: "/sofa-1-seater" },
      { label: "Side Table", href: "/sofa-2-seater" },
      { label: "Coffee Table", href: "/coffee-table" },
      { label: "Reading Table", href: "/reading-table" },
    ],
  },
   
  {
    title: "Cabinets",
    links: [
      { label: "Showcase", href: "/sofa-1-seater" },
      { label: "TV/Media Cabinet", href: "/tv-cabinet" },
    ],
  },

  {
    title: "Racks",
    links: [
      { label: "Display Racks", href: "/sofa-1-seater" },
      { label: "Magazine Racks", href: "/sofa-2-seater" },
    ],
  },
]; 
 
// dinning room 
// data/officeFurniture.js

export const diningRoom = [ 
  {
    title: "Dining Set",
    links: [
      { label: "Dining Set 4 Seater", href: "/dining-4-seater" }, 
      { label: "Dining Set 6 Seater", href: "/dining-6-seater" }, 
      { label: "Dining Set 8 Seater", href: "/dining-8-seater" }, 
      ],
  },

  {
    title: "Dining Table",
    links: [
        { label: "Dining Table", href: "/dining" },
    ],
  },

  {
    title: "Dining Chair",
    links: [
      { label: "Dining Chair", href: "/sofa-1-seater" },
    ],
  },

  {
    title: "Dining Room Cabinets",
    links: [
      { label: "Dinner Wagon", href: "/sofa-1-seater" },
      { label: "Buffet Cabinet", href: "/sofa-2-seater" },
    ],
  },

  {
    title: "Kitchen Racks",
    links: [
      { label: "Kitchen Racks", href: "/sofa-1-seater" },
      { label: "Tea Trolley", href: "/tea-trolley" }, 
    ],
  },

  {
    title: "Dolna",
    links: [
      { label: "Dolna", href: "/dolna" }, 
    ],
  },

  {
    title: "Iron Shelf",
    links: [
      { label: "Iron Shelf", href: "/iron-shelf" },
    ],
  },

   {
    title: "Book Shelf",
    links: [
      { label: "Book Shelf", href: "/book-shelf" },
    ],
  },
];


//    Bed Room

export const bedRoomFurnitureMenu = [
  {
    title: "Mattress", 
    links: [
      {
        label: "Spring Mattresses", // parent
        children: [
          { label: "Single Spring Mattress", href: "/single-spring-mattress" },
          { label: "Double Spring Mattress", href: "/double-spring-mattress" },
          { label: "King Spring Mattress", href: "/king-spring-mattress" },
        ],
      },
      {
        label: "Coir Mattresses", // parent
        children: [
          { label: "Single Coir Mattress", href: "/single-coir-mattress" },
          { label: "Double Coir Mattress", href: "/double-coir-mattress" },
          { label: "King Coir Mattress", href: "/king-coir-mattress" },
        ],
      },
      {
        label: "Foam Mattresses", // parent
        children: [
          { label: "Single Foam Mattress", href: "/single-foam-mattress" },
          { label: "Double Foam Mattress", href: "/double-foam-mattress" },
          { label: "King Foam Mattress", href: "/king-foam-mattress" },
        ],
      },
    ],
  },

  {
    title: "Bed Frames",
    links: [
      { label: "Single Bed Frame", href: "/single-bed-frame" },
      { label: "Double Bed Frame", href: "/double-bed-frame" },
      { label: "King Bed Frame", href: "/king-bed-frame" },
    ],
  },
  {
    title: "Bed Side Table",
    links: [
      { label: "Bed Side Table", href: "/bed-side-table" },
    ],
  },
  {
    title: "Cabinets",
    links: [
      { label: "Wardrobe Cabinet", href: "/wardrobe-cabinet" },
    ],
  },
  {
    title: "Cupboard",
    links: [
      { label: "2 Door Cupboard", href: "/2-door-cupboard" },
      { label: "3 Door Cupboard", href: "/3-door-cupboard" },
      { label: "4 Door Cupboard", href: "/4-door-cupboard" },
      { label: "5 Door Cupboard", href: "/5-door-cupboard" },
      { label: "6 Door Cupboard", href: "/6-door-cupboard" },
    ],
  },
  {
    title: "Chest of Drawers",
    links: [
      { label: "Chest of Drawers", href: "/chest-of-drawers" }, 
    ],
  },
  {
    title: "Shoe Rack",
    links: [
      { label: "Shoe Rack", href: "/shoe-rack" },
    ],
  },
  {
    title: "Dressing Table",
    links: [
      { label: "Dressing Table", href: "/dressing-table" }, 
    ],
  },
   {
    title: "Outdoor Furniture",
    links: [
      { label: "Plastic Tables & Chairs", href: "/dressing-table" }, 
    ], 
  }, 
  
   {
    title: "Children Furniture",
    links: [
      { label: "Children's Bed Frame", href: "/single-bed-frame" },
      { label: "Cot", href: "/double-bed-frame" },
      { label: "Cradle", href: "/king-bed-frame" }, 

      {
        label: "Children's Cabinets", // parent
        children: [
          { label: "Waredrobe Cabinet", href: "/single-spring-mattress" },
          { label: "Children's Cupboard", href: "/double-spring-mattress" },
          { label: "Children's Storage", href: "/king-spring-mattress" },
        ],
      },

       {
        label: "Children's Mattresses", // parent
        children: [
          { label: "Children's Spring Mattresses", href: "/single-spring-mattress" },
          { label: "Children's Coir Mattresses", href: "/double-spring-mattress" },
          { label: "Children's Foam Mattresses", href: "/king-spring-mattress" }, 
        ],
      },

    ],
  },
];


//    Institutional
export const institutionalFurnitureMenu = [
  {
    title: "Hospital",
    links: [
      {
        label: "Beds",
        children: [
          { label: "ICU Bed", href: "/icu-bed" },
          { label: "Mechanical Bed", href: "/mechanical-bed" },
          { label: "Hospital Bed", href: "/hospital-bed" },
          { label: "Patient Stretcher", href: "/patient-stretcher" },
          { label: "Patient Stretcher cum Trolley", href: "/patient-stretcher-cum-trolley" },
          { label: "Gynecological Bed", href: "/gynecological-bed" },
        ],
      },
      {
        label: "Cabinets",
        children: [
          { label: "Bed Side Cabinet", href: "/bed-side-cabinet" },
        ],
      },
    ]
  }, 

   {
    
    title: "Hospital",
    links: [
       {
        label: "Trolleys",
        children: [
          { label: "Food Trolley", href: "/food-trolley" },
          { label: "Medicine Trolley", href: "/medicine-trolley" },
          { label: "Instrument Trolley", href: "/instrument-trolley" },
        ],
      },

       { label: "Over Bed Table", href: "/over-bed-table" },
      { label: "Medicine Cupboard", href: "/medicine-cupboard" },
      { label: "Bowl Stand", href: "/bowl-stand" },
      { label: "Kick Bucket", href: "/kick-bucket" },
      { label: "Isolation Screen", href: "/isolation-screen" },

      ],
  },

  {

    title: "Hospital",
    links: [
      { label: "Saline Stand", href: "/saline-stand" },
      { label: "Baby Cot", href: "/baby-cot" },
      { label: "Bed Side Locker", href: "/bed-side-locker" },
      {
        label: "Waiting Chair",
        children: [
          { label: "3 Seater", href: "/waiting-chair-3-seater" },
          { label: "4 Seater", href: "/waiting-chair-4-seater" },
        ],
      },
      {
        label: "Cart",
        children: [
          { label: "Food Cart", href: "/food-cart" },
          { label: "Emergency Cart", href: "/emergency-cart" },
        ],
      },

    ]
  },
  {
    title: "Educational",
    links: [
      { label: "Classroom Chairs", href: "/classroom-chairs" },
      { label: "Storage and Organizers", href: "/storage-organizers" },
      { label: "Kitchenware Accents of Decors", href: "/kitchenware-accents-decors" },
    ],
  },
    {
    title: "Auditorium",
    links: [
      { label: "Auditorium Chairs", href: "/auditorium-chairs" },
    ],
  },
];

