import { products } from "@/data";

export default function Features() {
  return (
    <div className="features">
      <div className="container">
        <div className="wrappper">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span>
                  <span className="circle"></span>
                  Featured Products
                </span>
              </h2>
              <div className="second-links">
                <a href="#" className="view-all">
                  View All<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="products main flexwrap">
              {products.map((product) => (
                <div className="item">
                  <div className="media">
                    <div className="thumbnail object-cover">
                      <a href="#">
                        <img src="assets/products/apparel1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="hoverable">
                      <ul>
                        <li className="active">
                          <a href="#">
                            <i className="ri-heart-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="ri-eye-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="ri-shuffle-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className=" discount circle flexcenter">
                      <span>31%</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="rating">
                      <div className="stars"></div>
                      <span className=" mini-text">(1,275)</span>
                    </div>
                    <h3 className="main-links">
                      <a href="#"> Under Armour Mes's Tech</a>
                    </h3>
                    <div className="price">
                      <span className="current">$128.99</span>
                      <span className="normal mini-text">$128</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
