"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <footer>
      <div className="newsletter">
        <div className="container">
          <div className="wrapper">
            <div className="box">
              <div className="content">
                <h3>Join Our Newsletter</h3>
                <p>
                  Get E-mail updates about out latest shop and{" "}
                  <strong>special offers</strong>
                </p>
              </div>
              <form action="" className="search">
                <span className="icon-large">
                  {" "}
                  <i className="ri-mail-line"></i>
                </span>
                <input type="mail" placeholder="Your email address" required />
                <button type="button">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- newsletter --> */}

      <div className="widgets">
        <div className="container">
          <div className="wrapper">
            <div className="flexwrap">
              <div className="row">
                <div className="item mini-links">
                  <h4>Help & Contact</h4>
                  <ul className="flexcol">
                    <li>
                      <a href="#">Your Account</a>
                    </li>
                    <li>
                      <a href="#">Your Order</a>
                    </li>
                    <li>
                      <a href="#">Shipping Rates</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Assistant</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Products Categories</h4>
                  <ul className="flexcol">
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                    <li>
                      <a href="#">Electronic</a>
                    </li>
                    <li>
                      <a href="#">Women's Fashion</a>
                    </li>
                    <li>
                      <a href="#">Men's Fashion</a>
                    </li>
                    <li>
                      <a href="#">Girl'sFashion</a>
                    </li>
                    <li>
                      <a href="#">Boy's Fashion</a>
                    </li>
                    <li>
                      <a href="#">Health & Household</a>
                    </li>
                    <li>
                      <a href="#">Home & Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Pet Supplies</a>
                    </li>
                    <li>
                      <a href="#">Sports</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Payment Info</h4>
                  <ul className="flexcol">
                    <li>
                      <a href="#">Business Card </a>
                    </li>
                    <li>
                      <a href="#">Shop with Points</a>
                    </li>
                    <li>
                      <a href="#">Reload Your Balance</a>
                    </li>
                    <li>
                      <a href="#">Paypal </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>About Us</h4>
                  <ul className="flexcol">
                    <li>
                      <a href="#"> Company info</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Investors</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Policies</a>
                    </li>
                    <li>
                      <a href="#">Customers Review</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer links --> */}
      <div className="footer-info">
        <div className="container">
          <div className="wrapper">
            <div className="flexcol">
              <div className="logo">
                <a href="#" className="circle">
                  <span>.Store</span>{" "}
                </a>
              </div>
              <div className="socials">
                <ul className="flexitem">
                  <li>
                    <a href="#">
                      <i className="ri-twitter-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ri-youtube-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer info --> */}

      <div className="menu-button desktop-hide">
        <div className="container">
          <div className="wrapper">
            <nav>
              <ul className="flexitem">
                <li>
                  <a href="#">
                    <i className="ri-bar-chart-line"></i>
                    <span>Trending</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="ri-heart-line"></i>
                    <span>Whitelist</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="t-search" onClick={toggleSearch}>
                    <i className="ri-search-line"></i>
                    <span>Search</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-user-6-line"></i>
                    <span>Account</span>
                  </a>
                </li>

                <li>
                  <Link href="/cart">
                    <i className="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                    <div className="fly-item">
                      <span className="item-number">0</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- menu button --> */}

      <div
        className={`search-bottom desktop-hide ${
          showSearch ? "showsearch" : ""
        }`}
      >
        <div className="container">
          <div className="wrapper">
            <form action="" className="search">
              <span className="icon-large">
                <i className="ri-search-line"></i>
              </span>
              <input type="search" placeholder="Your email address" required />
              <button type="button">Search</button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- show menu --> */}
      <div className="overlay"></div>
    </footer>
  );
}
