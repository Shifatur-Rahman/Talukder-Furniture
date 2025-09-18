import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import CartLength from "../common/CartLength";

export default function Header2() {
  const [isSticky, setIsSticky] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const delta = 5;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) <= delta) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setHideHeader(true);
        setIsSticky(false);
      } else {
        // Scrolling up
        setHideHeader(false);
        setIsSticky(true);
      }

      if (currentScrollY < 100) {
        // Reset when near top
        setIsSticky(false);
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compose header class dynamically
  const headerClasses = [
    "header-default",
    "header-absolute",
    "header-style-2",
    "header-fixed",
    isSticky ? "header-sticky header-bg" : "",
    hideHeader ? "header-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <header id="header" className={headerClasses}>
      <div className="main-header has-border-y">
        <div className="container-full">
          <div className="row wrapper-header align-items-center">
            <div className="col-xl-3 col-2 d-xl-none">
              <a
                href="#mobileMenu"
                className="mobile-menu"
                data-bs-toggle="offcanvas"
                aria-controls="mobileMenu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                </svg>
              </a>
            </div>
            <div className="col-xl-5 d-none d-xl-block">
              <nav className="box-navigation text-center">
                <ul className="box-nav-ul justify-content-start">
                  <Nav textColor="text_white" />
                </ul>
              </nav>
            </div>
            <div className="col-xl-2 col-8 d-flex justify-content-center">
              <Link to={`/`} className="logo-header d-flex">
                <img
                  alt="logo"
                  className="logo"
                  src="/images/logo/logo-white.svg"
                  width={154}
                  height={38}
                />
                <img
                  alt="logo"
                  className="logo-black"
                  src="/images/logo/logo.svg"
                  width={154}
                  height={38}
                />
              </Link>
            </div>
            <div className="col-xl-5 col-2">
              <ul className="nav-icon">
                <li className="nav-search">
                  <a
                    href="#search"
                    data-bs-toggle="modal"
                    className="nav-icon-item text_white"
                  >
                    <span className="icon icon-search" />
                  </a>
                </li>
                <li className="nav-account">
                  <Link to={`/login`} className="nav-icon-item text_white">
                    <span className="icon icon-user" />
                  </Link>
                </li>
                <li className="nav-wishlist">
                  <Link to={`/wish-list`} className="nav-icon-item text_white">
                    <span className="icon icon-heart" />
                  </Link>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item text_white"
                  >
                    <span className="icon icon-cart" />
                    <span className="count-box text-button-small">
                      <CartLength />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
