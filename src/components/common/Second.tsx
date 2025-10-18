import { Link } from "react-router-dom";

export default function Categories() { 
  return (
     
    <section className="flat-spacing-2">
      <div className="container-full">
        <div className="row">
          <div className="col-12"> 
            <div className="text-center flat-spacing pt-0 line-bottom-container"> 
              <div className="wrap-cls-img2">
  {/* Row 1 */}
  <div className="row-group">
    <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner.jpg" alt="Office" />
      </div>
      <h3>Office</h3>
    </div>
  </div> 

  {/* Row 2 */} 
  <div className="row-group">
    <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner-1.jpg" alt="Living Room" />
      </div>
      <h3>Living Room</h3>
    </div>

    <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner-2.jpg" alt="Dining Room" />
      </div>
      <h3>Dining Room</h3>
    </div>
  </div>

  {/* Row 3 */}
  <div className="row-group">
    <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner-3.jpg" alt="Kids" />
      </div>
      <h3>Kids</h3>
    </div>
  </div>

  {/* Row 4 */}
  <div className="row-group">

      <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner-5.jpg" alt="Hospital" />
      </div>
      <h3>Hospital</h3>
    </div>

    <div className="cls-img-item2">
      <div className="image">
        <img src="/images/section/collections-banner-3.jpg" alt="Home" />
      </div>
      <h3>Home</h3>
    </div>

  </div>


     <div className="row-group">
            <div className="cls-img-item2">
               <div className="image">
                    <img src="/images/section/collections-banner-6.jpg" alt="Metal" />
               </div>
              <h3>Institutional</h3>
         </div>
      </div>

</div>

              <Link to={`/shop-default`} style={{marginTop: "2rem"}} className="btn-line"> 
                <span>View All Categiories</span> 
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
} 
