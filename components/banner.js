export default function Banner() {
  return (
    <div className="banners">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="banner flexwrap">
              <div className="row">
                <div className="item  ">
                  <div className="image">
                    <img src="assets/banner/banner1.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Burtal Sale!</h4>
                    <h3>
                      {" "}
                      <span>Get the deal here</span> <br /> Living Room{" "}
                    </h3>
                    <a href="#" className="primary-button">
                      Shop Now{" "}
                    </a>
                  </div>
                  <a href="#" className="over-link"></a>
                </div>
              </div>
              <div className="row">
                <div className="item get-gray">
                  <div className="image">
                    <img src="assets/banner/banner2.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Burtal Sale!</h4>
                    <h3>
                      {" "}
                      <span>Discount everyday</span> <br /> Office outlet{" "}
                    </h3>
                    <a href="#" className="primary-button">
                      Shop Now{" "}
                    </a>
                  </div>
                  <a href="#" className="over-link"></a>
                </div>
              </div>
            </div>
            <div className="product-categories  flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src="assets/banner/procat1.jpg" alt="" />
                  </div>
                  <div className="content mini-links">
                    <h4>Beauty</h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Makeup</a>
                      </li>
                      <li>
                        <a href="#">Skin Care</a>
                      </li>
                      <li>
                        <a href="#">Hair Care</a>
                      </li>
                      <li>
                        <a href="#">Fragrance</a>
                      </li>
                      <li>
                        <a href="#">Foot & Hand Care</a>
                      </li>
                    </ul>

                    <div className="second-links">
                      <a href="#" className="view-all">
                        {" "}
                        View all <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src="assets/banner/procat2.jpg" alt="" />
                  </div>
                  <div className="content mini-links">
                    <h4>Gatdets</h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Camera</a>
                      </li>
                      <li>
                        <a href="#">Sell Phones</a>
                      </li>
                      <li>
                        <a href="#">Computers</a>
                      </li>
                      <li>
                        <a href="#">GPS & Navigation</a>
                      </li>
                      <li>
                        <a href="#">Headphone</a>
                      </li>
                    </ul>

                    <div className="second-links">
                      <a href="#" className="view-all">
                        {" "}
                        View all <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img src="assets/banner/procat3.jpg" alt="" />
                  </div>
                  <div className="content mini-links">
                    <h4>Dome Decor</h4>
                    <ul className="flexcol">
                      <li>
                        <a href="#">Kitchen</a>
                      </li>
                      <li>
                        <a href="#">Dining Room</a>
                      </li>
                      <li>
                        <a href="#">Pantry</a>
                      </li>
                      <li>
                        <a href="#">Great Room</a>
                      </li>
                      <li>
                        <a href="#">Breakfast</a>
                      </li>
                    </ul>

                    <div className="second-links">
                      <a href="#" className="view-all">
                        {" "}
                        View all <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
