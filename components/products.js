import { products } from "@/data";
import Link from "next/link";

export default function Products() {
  return (
    <div className="trending">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span>
                <span className="circle"></span>
                Trending Products
              </span>
            </h2>
          </div>
          <div className="column">
            <div className="flexwrap" style={{ gap: "30px" }}>
              <div className="row products big ">
                <div className="item">
                  <div className="offer">
                    <p>Offer ends at </p>
                    <ul className="flexcenter">
                      <li>1</li>
                      <li>15</li>
                      <li>27</li>
                      <li>60</li>
                    </ul>
                  </div>
                  <div className="media">
                    <div className="image">
                      <a href="#">
                        <img src="assets/products/apparel4.jpg" alt="" />
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
                      <Link href="/1">
                        Happy Sailed Women Summer Boho Fashion
                      </Link>
                    </h3>
                    <div className="price">
                      <span className="current">$128.99</span>
                      <span className="normal mini-text">$128</span>
                    </div>
                    <div className="stock mini-text">
                      <div className="qty">
                        <span>
                          Stock: <strong className="qty-available">107</strong>
                        </span>
                        <span>
                          Stock: <strong className="qty-sold">3,452</strong>
                        </span>
                      </div>
                      <div className="bar">
                        <div className="available"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row products mini t-products" style={{ flex: 2 }}>
                {products.map((product) => (
                  <div className="item ">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel3.jpg" alt="" />
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
                        <span>32%</span>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="main-links">
                        <Link href="/1">
                          Man Sailed Women Summer Boho Fashion
                        </Link>
                      </h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className=" mini-text">(1275)</span>
                      </div>
                      <div className="price">
                        <span className="current">$128.99</span>
                        <span className="normal mini-text">$128</span>
                      </div>
                      <div className="  mini-text">
                        <p>2975 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
