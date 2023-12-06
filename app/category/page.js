export default function CategoryPage() {
  return (
    <div class="single-category">
      <div class="container">
        <div class="wrapper">
          <div class="column">
            <div class="holder">
              <div class="row sidebar">
                <div class="filter">
                  <div class="filter-block">
                    <h3>Category</h3>
                    <ul>
                      <li>
                        <input type="checkbox" name="checkbox" id="bags" />
                        <label for="bags">
                          <span class="checkbox"></span>
                          <span>Bags</span>
                        </label>
                        <span class="count">15</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="beauty" />
                        <label for="beauty">
                          <span class="checkbox"></span>
                          <span>Beauty</span>
                        </label>
                        <span class="count">5</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="clothing" />
                        <label for="clothing">
                          <span class="checkbox"></span>
                          <span>Clothing</span>
                        </label>
                        <span class="count">6</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="jewelry" />
                        <label for="jewelry">
                          <span class="checkbox"></span>
                          <span>Jewelry</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="shoes" />
                        <label for="shoes">
                          <span class="checkbox"></span>
                          <span>Shoes</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-block">
                    <h3>Activities</h3>
                    <ul>
                      <li>
                        <input type="checkbox" name="checkbox" id="athletic" />
                        <label for="athletic">
                          <span class="checkbox"></span>
                          <span>Athletic</span>
                        </label>
                        <span class="count">25</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="lounge" />
                        <label for="lounge">
                          <span class="checkbox"></span>
                          <span>Lounge</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="outdoor" />
                        <label for="outdoor">
                          <span class="checkbox"></span>
                          <span>Outdoor</span>
                        </label>
                        <span class="count">6</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="travel" />
                        <label for="travel">
                          <span class="checkbox"></span>
                          <span>Travel</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="urban" />
                        <label for="urban">
                          <span class="checkbox"></span>
                          <span>Urban</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-block">
                    <h3>Activities</h3>
                    <ul>
                      <li>
                        <input type="checkbox" name="checkbox" id="nike" />
                        <label for="nike">
                          <span class="checkbox"></span>
                          <span>Nike</span>
                        </label>
                        <span class="count">25</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="loisvuitton"
                        />
                        <label for="loisvuitton">
                          <span class="checkbox"></span>
                          <span>Lois Vuitton</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="hermes" />
                        <label for="hermes">
                          <span class="checkbox"></span>
                          <span>Hermes</span>
                        </label>
                        <span class="count">6</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="gucci" />
                        <label for="gucci">
                          <span class="checkbox"></span>
                          <span>Gucci</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                      <li>
                        <input type="checkbox" name="checkbox" id="zara" />
                        <label for="zara">
                          <span class="checkbox"></span>
                          <span>Zara</span>
                        </label>
                        <span class="count">9</span>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-block products">
                    <h3>Color</h3>
                    <ul class="bycolor variant flexitem">
                      <li>
                        <input type="radio" name="color" id="cogrey" />
                        <label for="cogrey" class="circle"></label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="coblue" />
                        <label for="coblue" class="circle"></label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="cogreen" />
                        <label for="cogreen" class="circle"></label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="cored" />
                        <label for="cored" class="circle"></label>
                      </li>
                      <li>
                        <input type="radio" name="color" id="colight" />
                        <label for="colight" class="circle"></label>
                      </li>
                    </ul>
                  </div>

                  <div class="filter-block pricing">
                    <h4>Price</h4>
                    <div class="byprice">
                      <div class="range-tack">
                        <input type="range" value="2500" min="0" max="100000" />
                      </div>
                      <div class="price-range">
                        <span class="price-form">$50</span>
                        <span class="price-to">$1000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section">
                <div class="row">
                  <div class="cat-head">
                    <div class="breadcrumb">
                      <ul class="flexitem">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>Women</li>
                      </ul>
                    </div>
                    <div class="page-title">
                      <h1>Women</h1>
                    </div>

                    <div class="cat-description">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium necessitatibus enim saepe nulla repellendus
                        veniam sunt ullam reiciendis quia aperiam perferendis
                        eos, soluta, inventore impedit quam quas. Vitae
                        asperiores eveniet quas voluptate, deleniti odio a enim
                        consequatur saepe, itaque fuga quos maiores suscipit, ut
                        iste ratione numquam assumenda debitis minima.
                      </p>
                    </div>
                    <div class="cat-navigation flexitem">
                      <div class="item-filter desktop-hide">
                        <a href="#" class="filter-trigger label">
                          <i class="ri-menu-2-line ri-2x"></i>
                          <span>Filter</span>
                        </a>
                      </div>
                      <div class="item-sortir">
                        <div class="label">
                          <span class="mobile-hide">Sort by default</span>
                          <div class="desktop-hide">Default</div>
                          <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul>
                          <li>Default</li>
                          <li>Product Name</li>
                          <li>Price</li>
                          <li>Brand</li>
                        </ul>
                      </div>
                      <div class="item-perpage mobile-hide">
                        <div class="label">Items per page</div>
                        <div class="desktop-hide">10</div>
                      </div>
                      <div class="item-options">
                        <div class="label">
                          <span class="mobile-hide">Show 10 per page</span>
                          <div class="desktop-hide">10</div>
                          <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <ul>
                          <li>10</li>
                          <li>20</li>
                          <li>30</li>
                          <li>All</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="products main flexwrap">
                  {/* <!-- product category product copy from  features product --> */}
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel2.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                      <div class="footer">
                        <ul class="mini-text">
                          <li>Polyester ,Cotton</li>
                          <li> Pull on Closure</li>
                          <li> Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel3.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                      <div class="footer">
                        <ul class="mini-text">
                          <li>Polyester ,Cotton</li>
                          <li> Pull on Closure</li>
                          <li> Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel4.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                      <div class="footer">
                        <ul class="mini-text">
                          <li>Polyester ,Cotton</li>
                          <li> Pull on Closure</li>
                          <li> Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/shoe1-1.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                      <div class="footer">
                        <ul class="mini-text">
                          <li>Polyester ,Cotton</li>
                          <li> Pull on Closure</li>
                          <li> Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="media">
                      <div class="thumbnail object-cover">
                        <a href="#">
                          <img src="assets/products/apparel6.jpg" alt="" />
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <a href="#">
                              <i class="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i class="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class=" discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <span class=" mini-text">(1,275)</span>
                      </div>
                      <h3 class="main-links">
                        <a href="#"> Under Armour Mes's Tech</a>
                      </h3>
                      <div class="price">
                        <span class="current">$128.99</span>
                        <span class="normal mini-text">$128</span>
                      </div>
                      <div class="footer">
                        <ul class="mini-text">
                          <li>Polyester ,Cotton</li>
                          <li> Pull on Closure</li>
                          <li> Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="load-more flexcenter">
                  <a href="#" class="secondary-button">
                    Load more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
