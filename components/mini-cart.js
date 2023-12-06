import Link from "next/link";

export default function MiniCart() {
  return (
    <div class="mini-cart">
      <div class="content">
        <div class="cart-head">5 Items in cart</div>
        <div class="cart-body">
          <ul class="products mini">
            <li class="item">
              <div class="thumbnail object-cover">
                <a href="#">
                  <img src="assets/products/home1.jpg" alt="" />
                </a>
              </div>
              <div class="item-content">
                <p>
                  <a href="#"> Dimmable Ceiling light Modern</a>
                </p>
                <span class="price">
                  <span>$333.333</span>
                  <span class="fly-item">
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <a href="#" class="item-remove">
                {" "}
                <i class="ri-close-line"></i>
              </a>
            </li>
            <li class="item">
              <div class="thumbnail object-cover">
                <a href="#">
                  <img src="assets/products/home2.jpg" alt="" />
                </a>
              </div>
              <div class="item-content">
                <p>
                  <a href="#"> Dimmable Ceiling light Modern</a>
                </p>
                <span class="price">
                  <span>$333.333</span>
                  <span class="fly-item">
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <a href="#" class="item-remove">
                {" "}
                <i class="ri-close-line"></i>
              </a>
            </li>
            <li class="item">
              <div class="thumbnail object-cover">
                <a href="#">
                  <img src="assets/products/home3.jpg" alt="" />
                </a>
              </div>
              <div class="item-content">
                <p>
                  <a href="#"> Dimmable Ceiling light Modern</a>
                </p>
                <span class="price">
                  <span>$333.333</span>
                  <span class="fly-item">
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <a href="#" class="item-remove">
                {" "}
                <i class="ri-close-line"></i>
              </a>
            </li>
            <li class="item">
              <div class="thumbnail object-cover">
                <a href="#">
                  <img src="assets/products/home4.jpg" alt="" />
                </a>
              </div>
              <div class="item-content">
                <p>
                  <a href="#"> Dimmable Ceiling light Modern</a>
                </p>
                <span class="price">
                  <span>$333.333</span>
                  <span class="fly-item">
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <a href="#" class="item-remove">
                {" "}
                <i class="ri-close-line"></i>
              </a>
            </li>
            <li class="item">
              <div class="thumbnail object-cover">
                <a href="#">
                  <img src="assets/products/home5.jpg" alt="" />
                </a>
              </div>
              <div class="item-content">
                <p>
                  <a href="#"> Dimmable Ceiling light Modern</a>
                </p>
                <span class="price">
                  <span>$333.333</span>
                  <span class="fly-item">
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <a href="#" class="item-remove">
                {" "}
                <i class="ri-close-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="cart-footer">
          <div class="subtotal">
            <p>Subtotal</p>
            <p>
              <strong>$1245.33</strong>
            </p>
          </div>
          <div class="actions">
            <a href="/checkout" class="primary-button">
              Checkout
            </a>
            <Link href="/cart" class="secondary-button">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
