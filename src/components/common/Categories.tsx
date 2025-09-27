import { Link } from "react-router-dom";

export default function Categories() { 
  return (
    <section className="flat-spacing-2">
      <div className="container-full">
        <div className="row">
          <div className="col-12"> 
            <div className="text-center flat-spacing pt-0 line-bottom-container"> 
              <div className="wrap-cls-img"> 
                <div className="cls-img-item hover-img"> 
                  {/* <Link to={`/shop-default`} className="image img-style">  */} 
                   <Link to={`/office-furniture`} className="image img-style">
                    <img 
                      data-src="/images/section/collections-banner.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner.jpg"
                      width={441}
                      height={242}
                    />
                  </Link> 
                  <h3>
                    <Link className="link" to={`/office-furniture`}> 
                      Office Furniture 
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img"> 
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-1.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-1.jpg"
                      width={441}
                      height={242}
                    /> 
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/shop-default`}> 
                      Industrial Furniture
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link to={`/shop-default`} className="image img-style">
                    <img
                      data-src="/images/section/collections-banner-2.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-2.jpg"
                      width={441}
                      height={242}
                    />
                  </Link> 
                  <h3>
                    <Link className="link" to={`/shop-default`}> 
                      Home Furniture
                    </Link>
                  </h3>
                </div>
                <div className="cls-img-item hover-img"> 
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-3.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-3.jpg"
                      width={441}
                      height={242}
                    />
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/shop-default`}> 
                      Metal Furniture
                    </Link> 
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-4.png"
                      alt="Cls Image"
                      src="/images/section/collections-banner-4.png" 
                      width={441}
                      height={242}
                    />
                  </Link>
                  <h3>
                    <Link className="link" to={`/shop-default`}> 
                      Hospital 
                    </Link> 
                  </h3>
                </div>
              </div>
              <Link to={`/shop-default`} className="btn-line"> 
                <span>View All Categiories</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
} 
