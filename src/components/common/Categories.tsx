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
                   <Link to={`/md-table`} className="image img-style">
                    <img 
                      data-src="/images/section/collections-banner.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner.jpg"
                      width={441}
                      height={242}
                    /> 
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/md-table`}> 
                      Office Furniture
                    </Link>
                  </h3> 
                </div> 
                <div className="cls-img-item hover-img"> 
                  <Link to={`/sofa-221`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-1.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-1.jpg"
                      width={441}
                      height={242}
                    /> 
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/sofa-221`}> 
                      Living Furniture
                    </Link>
                  </h3>
                </div>

                <div className="cls-img-item hover-img"> 
                  <Link to={`/dining-6-seater`} className="image img-style">
                    <img
                      data-src="/images/section/collections-banner-2.jpg"
                      alt="Cls Image"
                      src="/images/section/collections-banner-2.jpg"
                      width={441}
                      height={242}
                    />
                  </Link>  
                  <h3> 
                    <Link className="link" to={`/dining-6-seater`}> 
                      Dining Room
                    </Link>
                  </h3>
                </div>

                <div className="cls-img-item hover-img"> 
                  <Link to={`/bed-room-set`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-3.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-3.jpg"
                      width={441}
                      height={242}
                    /> 
                  </Link> 
                  <h3> 
                    <Link className="link" to={`/bed-room-set`}> 
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
                  <Link to={`/hospital-bed`} className="image img-style"> 
                    <img
                      data-src="/images/section/collections-banner-5.jpg" 
                      alt="Cls Image"
                      src="/images/section/collections-banner-5.jpg"
                      width={441}
                      height={242}
                    />
                  </Link> 
                  
                  <h3>
                    <Link className="link" to={`/hospital-bed`}> 
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
