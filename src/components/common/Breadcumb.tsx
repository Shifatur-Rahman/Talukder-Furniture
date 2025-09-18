import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";

export default function Breadcumb({
  pageTitle = "About Us",
  pageName = "About Us",
  parentPage = "Pages",
  imgSrc = "/images/page-title/page-title-6.jpg",

  speed = 0.9,
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    const yPos = (scrollTop - offsetTop) * speed;
    ref.current.style.backgroundPosition = `center ${yPos}px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="page-title relative"
      style={{ overflow: "hidden", height: "280px" }}
    >
      <div
        className="paralaximg"
        ref={ref}
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          backgroundSize: "cover",
        }}
      />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">{pageTitle}</h3>
              <ul className="breadcrumb">
                <li>
                  <Link to={`/`}>Homepage</Link>
                </li>
                {parentPage && <li>{parentPage}</li>}
                <li>{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
