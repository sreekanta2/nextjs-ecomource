"use client";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`single-checkout ${showModal ? "showmodal " : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className="checkout flexwrap">
            <div iv className="item left styled">
              <h1>Shipping Address </h1>
              <form action="">
                <p>
                  <label for="email">
                    Email Address <span></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="off"
                    required
                  />
                </p>
                <p>
                  <label for="fname">
                    First Name <span></span>
                  </label>
                  <input type="text" id="fname" required />
                </p>
                <p>
                  <label for="laname">
                    Last Name <span></span>
                  </label>
                  <input type="text" id="lname" required />
                </p>

                <p>
                  <label for="adress">
                    Street Address <span></span>
                  </label>
                  <input type="text" id="address" required />
                </p>
                <p>
                  <label for="city">Street Address </label>
                  <input type="text" id="city" />
                </p>
                <p>
                  <label for="postal">Postal/Zip Code </label>
                  <input type="text" id="city" />
                </p>
                <p>
                  <label for="country">Country</label>
                  <select name="country" id="country">
                    <option value=""></option>
                    <option value="1 ">Bangladesh</option>
                    <option value="2 ">India</option>
                    <option value="3 ">Pakistan</option>
                    <option value="4">Nepal</option>
                    <option value="5">Others</option>
                  </select>
                </p>
                <p>
                  <label for="phone">Phone Number </label>
                  <input type="number" id="phone" />
                </p>
                <p>
                  <label for="phone">Order Notes (optional) </label>
                  <textarea cols="30" rows="10"></textarea>
                </p>
                <p className="checkset">
                  <input type="checkbox" id="anaccount" />
                  <label for="anaccount"> Create an account?</label>
                </p>
              </form>

              <div className="shipping-methods">
                <h2>Shipping Methods</h2>
                <p className="checkset">
                  <input type="radio" checked />
                  <label for=""> $5.00 Flate Rate</label>
                </p>
              </div>
              <div className="primary-checkout">
                <button className="primary-button">Place Order</button>
              </div>
            </div>
            <div className="right item">
              <h2>Order Summary</h2>
              <div className="summary-order is_sticky">
                <div className="summary-totals">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>$12542.33</span>
                    </li>
                    <li>
                      <span>Discount</span>
                      <span>$100.23</span>
                    </li>
                    <li>
                      <span>Shipping: Flat</span>
                      <span>$10.00</span>
                    </li>
                    <li>
                      <span>Total</span>
                      <span>
                        <strong>$33333.333</strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="products mini">
                  <li className="item">
                    <div className="thumbnail object-cover">
                      <img src="assets/products/apparel1.jpg" alt="" />
                    </div>
                    <div className="item-content">
                      <p>Lorem ipsum dolor sit, amet consectetur !</p>
                      <span className="price">$233.33</span>
                      <span>x 2</span>
                    </div>
                  </li>
                  <li className="item">
                    <div className="thumbnail object-cover">
                      <img src="assets/products/apparel1.jpg" alt="" />
                    </div>
                    <div className="item-content">
                      <p>Lorem ipsum dolor sit, amet consectetur !</p>
                      <span className="price">$233.33</span>
                      <span>x 2</span>
                    </div>
                  </li>
                  <li className="item">
                    <div className="thumbnail object-cover">
                      <img src="assets/products/apparel1.jpg" alt="" />
                    </div>
                    <div className="item-content">
                      <p>Lorem ipsum dolor sit, amet consectetur !</p>
                      <span className="price">$233.33</span>
                      <span>x 2</span>
                    </div>
                  </li>
                  <li className="item">
                    <div className="thumbnail object-cover">
                      <img src="assets/products/apparel1.jpg" alt="" />
                    </div>
                    <div className="item-content">
                      <p>Lorem ipsum dolor sit, amet consectetur !</p>
                      <span className="price">$233.33</span>
                      <span>x 2</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="modal" className="modal">
        <div className="content flexcol">
          <div className="image object-cover">
            <img src="assets/products/apparel4.jpg" alt="" />
          </div>
          <h2>Get the latest deals and coupons</h2>
          <p className="mobile-hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            molestiae vero consectetur fugit sint libero.
          </p>
          <form action="" className="search">
            <span className="icon-large">
              <i className="ri-mail-line"></i>
            </span>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </form>
          <a href="#" className="mini-text">
            Do not show me this again
          </a>
          <a
            href="#"
            className="t-close modal-close flexcenter"
            onClick={closeModal}
          >
            <i className="ri-close-line"></i>
          </a>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
