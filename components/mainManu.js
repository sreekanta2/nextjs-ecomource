import { mainMenus } from "@/data";
import { useState } from "react";

export default function MainMenu({ mobileHide }) {
  const [expand, setExpanded] = useState(null);
  const onToggle = () => {
    setExpanded(!expand);
  };
  return (
    <nav className={`${mobileHide ? "mobile-hide" : ""} `}>
      <ul className="flexitem second-links">
        {mainMenus.map((menuItem, index) => {
          return (
            <li
              class={`${menuItem?.submenus ? "hash-child" : ""} ${
                expand ? "expand" : ""
              }`}
            >
              <a href={menuItem.link} onClick={onToggle}>
                {menuItem.label}
                {menuItem?.submenus && (
                  <div class="icon-small">
                    <i class="ri-arrow-down-s-line"></i>
                  </div>
                )}
                {index === mainMenus.length - 1 && (
                  <div className="fly-item">
                    <span>New!</span>
                  </div>
                )}
              </a>
              <div className="mega">
                <div className="container">
                  <div className="wrapper">
                    {menuItem.submenus && (
                      <>
                        {menuItem.submenus.map((submenu, subIndex) => (
                          <div className="flexcol" key={subIndex}>
                            <div className="row">
                              <h4>{submenu?.label}</h4>

                              {submenu.miniSubmenus && (
                                <ul>
                                  {submenu.miniSubmenus.map(
                                    (miniSubmenu, miniIndex) => (
                                      <li key={miniIndex}>
                                        <a href={miniSubmenu.link}>
                                          {miniSubmenu.label}
                                        </a>

                                        <div className="fly-item">
                                          <span>New!</span>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="flexcol products">
                          <div className="row">
                            <div className="media">
                              <div className="thumbnail object-cover">
                                <a href="#">
                                  <img
                                    src="assets/products/apparel4.jpg"
                                    alt=""
                                  />
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
