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
                      Living Furniture
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
                      Dining Room
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
                      Bed Room
                    </Link> 
                  </h3>
                </div>
                <div className="cls-img-item hover-img">
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-4.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-4.jpg"
                      width={441}
                      height={242}
                    /> 
                  </Link> 
                  <h3>
                    <Link className="link" to={`/shop-default`}> 
                      Kids Room
                    </Link>
                  </h3>
                </div> 

                <div className="cls-img-item hover-img">
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-5.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-5.jpg"
                      width={441}
                      height={242}
                    />
                  </Link> 
                  
                  <h3>
                    <Link className="link" to={`/shop-default`}> 
                      Hospital Furniture
                    </Link> 
                  </h3>
                </div>
     
                <div className="cls-img-item hover-img"> 
                  <Link to={`/shop-default`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-6.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-6.jpg" 
                      width={441}
                      height={242} 
                    />
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/shop-default`}> 
                      Institutional
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
