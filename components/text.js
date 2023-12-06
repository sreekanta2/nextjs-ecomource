import { categories } from "@/data";

export default function MainMenu({ mobileHide }) {
  return (
    <nav className={`${mobileHide ? "mobile-hide" : ""}`}>
      <ul className="flexitem second-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li className="hash-child">
          <a href="#">
            Women
            <div className="icon-small">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </a>
          <div className="mega">
            <div className="container">
              <div className="wrapper">
                {categories.map((category, index) => (
                  <div className="flexcol" key={index}>
                    <div className="row">
                      <h4>{category?.title}</h4>
                      <ul>
                        {category.items.map((item, index) => (
                          <li key={index}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="flexcol products">
                  <div className="row">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel4.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="text-content">
                      <h4>Most wanted!</h4>
                      <a href="#" className="primary-button">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">
            Sports
            <div className="fly-item">
              <span>New!</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
