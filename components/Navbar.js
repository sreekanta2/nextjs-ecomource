"use client";
import { menuItems } from "@/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { default as MainMenu } from "./mainManu";
import MiniCart from "./mini-cart";
import { SideMenu } from "./sideMenu";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);

  const topPlaceRef = useRef(null);

  useEffect(() => {
    copyMenu();
  }, []);

  const copyMenu = () => {
    const topNav = document.querySelector(".header-top .wrapper");

    if (topPlaceRef.current) {
      topPlaceRef.current.innerHTML = topNav.innerHTML;
    }
  };
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const handleSubMenuClick = (index) => {
    setExpandedSubMenu((prevIndex) => (prevIndex === index ? "" : index));
  };

  // show dpt menu vissible
  const [isDptVisible, setDptVisible] = useState(false);

  const handleDptToggle = () => {
    setDptVisible(!isDptVisible);
  };

  return (
    <div
      className={`${showMenu ? "site home-page showmenu" : "site home-page  "}`}
    >
      <aside
        className={`${
          showMenu ? "site-off desktop-hide showmenu" : "site-off desktop-hide "
        }`}
      >
        <div className="off-canvas">
          <div className="canvas-head flexitem">
            <div className="logo">
              <a href="#">
                <span className="circle"></span>.Store
              </a>
            </div>
            <a
              href="#"
              className="t-close flexcenter"
              onClick={handleMenuToggle}
            >
              <span className="i ri-close-line"></span>
            </a>
          </div>
          {showMenu && (
            <div className="departments">
              <div className="dpt-menu">
                <ul className="second-links">
                  {menuItems.map((menuItem, index) => (
                    <SideMenu
                      key={index}
                      label={menuItem.label}
                      icon={menuItem.icon}
                      subItems={menuItem.subItems}
                      isExpanded={index === expandedSubMenu}
                      onToggle={() => handleSubMenuClick(index)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
          <MainMenu />
          <div className="thetop-nav" ref={topPlaceRef}></div>
        </div>
      </aside>
      <header>
        <div className="header-top mobile-hide">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="left">
                <ul className="flexitem main-links">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Featured Products</a>
                  </li>
                  <li>
                    <a href="#">Whitelist</a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul className="flexitem ">
                  <li>
                    <a href="#">Sign Up </a>
                  </li>
                  <li>
                    <a href="#"> My Account</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                  <li>
                    <a href="#">
                      USD
                      <span className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </a>
                    <ul>
                      <li className="current">
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">ERO</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                      <li>
                        <a href="#">IDR</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      English
                      <span className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </a>
                    <ul>
                      <li className="current">
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">ERO</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                      <li>
                        <a href="#">IDR</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- header  top--> */}
        <div className=" container">
          <div className="header-nav">
            <div className=" flexitem">
              <a
                href="#"
                className="trigger desktop-hide"
                onClick={handleMenuToggle}
              >
                <span className="i ri-menu-2-line"></span>
              </a>
              <div className="left flexitem">
                <div className="logo">
                  <Link href="/">
                    <span className="circle"></span>.Store
                  </Link>
                </div>
                <MainMenu mobileHide />
              </div>

              <div className="right">
                <ul className="flexitem second-links">
                  <li className="mobile-hide">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-heart-line"></i>
                      </div>
                      <div className="fly-item">
                        <span className="item-number">0</span>
                      </div>
                    </a>
                  </li>
                  <li onClick={handleCartToggle}>
                    <a href="#" className="iscart">
                      <div className="icon-large">
                        <i className="ri-shopping-cart-line"></i>
                        <div className="fly-item">
                          <span className="item-number">0</span>
                        </div>
                      </div>
                      <div className="icon-text">
                        <div className="mini-text">Total</div>
                        <div className="cart-total">$0.00</div>
                      </div>
                    </a>
                    {showCart && <MiniCart />}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main mobile-hide">
          <div className="container">
            <div className="flexitem">
              <div className="left">
                <div className="dpt-cat">
                  <div className="dpt-head">
                    <div className="main-text">All Departments</div>
                    <div className="mini-text mobile-hide">1056 Products</div>
                    <a
                      href="#"
                      className="dpt-trigger mobile-hide"
                      onClick={handleDptToggle}
                    >
                      <i className="ri-menu-3-line ri-xl"></i>
                      <i className="ri-close-line"></i>
                    </a>
                  </div>

                  <div className="dpt-menu">
                    <ul className="second-links">
                      {isDptVisible &&
                        menuItems.map((menuItem, index) => (
                          <SideMenu
                            key={index}
                            label={menuItem.label}
                            icon={menuItem.icon}
                            subItems={menuItem.subItems}
                            isExpanded={index === expandedSubMenu}
                            onToggle={() => handleSubMenuClick(index)}
                          />
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="search-box">
                  <form className="search">
                    <span className="icon-large">
                      <i className="ri-search-line"></i>
                    </span>
                    <input type="text" placeholder="search" />
                    <button type="button">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="overlay"></div>
    </div>
  );
}
