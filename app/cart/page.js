export default function CartPage() {
  return (
    <div className="single-cart">
      <div className="container">
        <div className="wrapper">
          <div className="breadcrumb">
            <ul className="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>cart</li>
            </ul>
          </div>
          <div className="page-title">
            <h1> Shopping Cart</h1>
          </div>
          <div className="products one cart">
            <div className="flexwrap">
              <form action="" className="form-cart">
                <div className="item">
                  <table id="cart-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="flexitem">
                          <div className="thumbnail object-cover">
                            <a href="#">
                              <img src="assets/products/apparel1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content">
                            <strong>
                              <a href="#"> Dimmable Ceiling light Moern</a>
                            </strong>
                            <p>Color:Gold</p>
                          </div>
                        </td>
                        <td>$100.33</td>
                        <td>
                          <div className="qty-control flexitem">
                            <button className="minus">-</button>
                            <input type="text" value="2" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>$333.33</td>
                        <td>
                          <a href="#" className="item-remove">
                            {" "}
                            <i className="ri-close-line"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="flexitem">
                          <div className="thumbnail object-cover">
                            <a href="#">
                              <img src="assets/products/apparel1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content">
                            <strong>
                              <a href="#"> Dimmable Ceiling light Modern</a>
                            </strong>
                            <p>Color:Gold</p>
                          </div>
                        </td>
                        <td>$100.33</td>

                        <td>
                          <div className="qty-control flexitem">
                            <button className="minus">-</button>
                            <input type="text" value="2" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>$333.33</td>
                        <td>
                          <a href="#" className="item-remove">
                            {" "}
                            <i className="ri-close-line"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="flexitem">
                          <div className="thumbnail object-cover">
                            <a href="#">
                              <img src="assets/products/apparel1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content">
                            <strong>
                              <a href="#"> Dimmable Ceiling light Moern</a>
                            </strong>
                            <p>Color:Gold</p>
                          </div>
                        </td>
                        <td>$100.33</td>
                        <td>
                          <div className="qty-control flexitem">
                            <button className="minus">-</button>
                            <input type="text" value="2" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>$333.33</td>
                        <td>
                          <a href="#" className="item-remove">
                            {" "}
                            <i className="ri-close-line"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="flexitem">
                          <div className="thumbnail object-cover">
                            <a href="#">
                              <img src="assets/products/apparel1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content">
                            <strong>
                              <a href="#"> Dimmable Ceiling light Moern</a>
                            </strong>
                            <p>Color:Gold</p>
                          </div>
                        </td>
                        <td>$100.33</td>
                        <td>
                          <div className="qty-control flexitem">
                            <button className="minus">-</button>
                            <input type="text" value="2" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>$333.33</td>
                        <td>
                          <a href="#" className="item-remove">
                            {" "}
                            <i className="ri-close-line"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="flexitem">
                          <div className="thumbnail object-cover">
                            <a href="#">
                              <img src="assets/products/apparel1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="content">
                            <strong>
                              <a href="#"> Dimmable Ceiling light Moern</a>
                            </strong>
                            <p>Color:Gold</p>
                          </div>
                        </td>
                        <td>$100.33</td>
                        <td>
                          <div className="qty-control flexitem">
                            <button className="minus">-</button>
                            <input type="text" value="2" min="1" />
                            <button className="plus">+</button>
                          </div>
                        </td>
                        <td>$333.33</td>
                        <td>
                          <a href="#" className="item-remove">
                            {" "}
                            <i className="ri-close-line"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
              <div className="cart-summary styled">
                <div className="item">
                  <div className="coupon">
                    <input type="text " placeholder="Enter coupon" />
                    <button type="button">Apply</button>
                  </div>
                  <div className="shipping-rate collapse">
                    <div className="hash-child expand">
                      <a href="#" className="icon-small">
                        Estimate Shipping And Text{" "}
                      </a>
                      <div className="content">
                        <div className="countries">
                          <form action="">
                            <label for="country">Country</label>
                            <select name="country" id="country">
                              <option value=""></option>
                              <option value="1 ">Bangladesh</option>
                              <option value="2 ">India</option>
                              <option value="3 ">Pakistan</option>
                              <option value="4">Nepal</option>
                              <option value="5">Others</option>
                            </select>
                          </form>
                        </div>
                        <div className="state">
                          <form action="">
                            <label for="state">State</label>
                            <select name="state" id="state">
                              <option value=""></option>
                              <option value="1 ">Dhaka</option>
                              <option value="2 ">Dhili</option>
                              <option value="3 ">Islamabad</option>
                              <option value="4">Katmandu</option>
                              <option value="5">Others</option>
                            </select>
                          </form>
                        </div>
                        <div className="postal-code">
                          <form action="">
                            <label for="postal">Zip/Postal Code</label>
                            <input type="number" name="postal" id="postal" />
                          </form>
                        </div>
                        <div className="rate-option variant">
                          <form action="">
                            <p>
                              <span>Flat: $10.00</span>
                              <input
                                type="radio"
                                name="rate-option"
                                id="flat"
                                checked
                              />
                              <label for="flat" className="circle"></label>
                            </p>
                            <p>
                              <span>Best: $0.00</span>
                              <input
                                type="radio"
                                name="rate-option"
                                id="best"
                              />
                              <label for="best" className="circle"></label>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-total">
                    <table>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>$3333.333</td>
                        </tr>
                        <tr>
                          <th>Discount</th>
                          <td>300.00</td>
                        </tr>
                        <tr>
                          <th>
                            Shipping <span className="mini-text">(Flat)</span>
                          </th>
                          <td>$10.00</td>
                        </tr>
                        <tr className="grand-total">
                          <th>TOTAL</th>
                          <td>
                            <strong>$3333.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="secondary-button">Checkout</button>
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
