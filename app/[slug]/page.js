"use client";
import Banner from "@/components/banner";
import Features from "@/components/features";
import Products from "@/components/products";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function SinglePage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(3);

  const toggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const images = [
    "assets/slider/slider0.jpg",
    "assets/slider/slider1.jpg",
    "assets/slider/slider2.jpg",
  ];

  return (
    <div class="container">
      <div class="single-product">
        <div class="wrapper">
          <div class="breadcrumb">
            <ul class="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>Men Slip on Shoes Casual with arch Support Insoles</li>
            </ul>
          </div>
          {/* <!-- breadcrumb --> */}
          <div class="column">
            <div class="products one">
              <div class="flexwrap">
                <div class="row">
                  <div class="item is_sticky">
                    <div class="price">
                      <span class="discount">
                        32% <br />
                        OFF
                      </span>
                    </div>

                    <div class="big-image">
                      <FsLightbox toggler={toggler} sources={images} />
                      <Swiper
                        class=" big-image-wrapper "
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                      >
                        {images.map((image, index) => (
                          <SwiperSlide class="image-show" key={index}>
                            <a href={image}>
                              <img
                                src={image}
                                alt=""
                                onClick={() => setToggler(!toggler)}
                              />
                            </a>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div class="small-image">
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                      >
                        <ul class="small-image-wrapper  ">
                          {images.map((image, index) => (
                            <SwiperSlide class="thumbnail-show  ">
                              <img src={image} alt="" />
                            </SwiperSlide>
                          ))}
                        </ul>
                      </Swiper>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="item">
                    <h1>Men Slip On Shoes Casual with Arch Support Insole </h1>
                    <div class="content">
                      <div class="rating">
                        <div class="stars"></div>
                        <a href="#" class="mini-text">
                          2,2145 reviews
                        </a>
                        <a href="#" class="add-review mini-text">
                          Add Your Review
                        </a>
                      </div>

                      <div class="stock-sku">
                        <span class="available">In Stock: </span>
                        <span class="sku mini-text">SKU -881</span>
                      </div>
                      <div class="price">
                        <span class="current">$80.90</span>
                        <span class="normal">$119.90</span>
                      </div>
                      <div class="colors">
                        <p> Colors</p>
                        <div class="variant">
                          <form action="">
                            <p>
                              <input type="radio" name="color" id="cogery" />
                              <label for="cogery" class="circle"></label>
                            </p>

                            <p>
                              <input type="radio" name="color" id="coblue" />
                              <label for="coblue" class="circle"></label>
                            </p>
                            <p>
                              <input type="radio" name="color" id="cogreen" />
                              <label for="cogreen" class="circle"></label>
                            </p>
                          </form>
                        </div>
                      </div>

                      <div class="sizes">
                        <p> Sizes</p>
                        <div class="variant">
                          <form action="">
                            <p>
                              <input type="radio" name="size" id="size-40" />
                              <label for="size-40" class="circle">
                                <span>40</span>
                              </label>
                            </p>
                            <p>
                              <input type="radio" name="size" id="size-41" />
                              <label for="size-41" class="circle">
                                <span>41</span>
                              </label>
                            </p>
                            <p>
                              <input type="radio" name="size" id="size-42" />
                              <label for="size-42" class="circle">
                                <span>42</span>
                              </label>
                            </p>
                            <p>
                              <input type="radio" name="size" id="size-43" />
                              <label for="size-43" class="circle">
                                <span>43</span>
                              </label>
                            </p>
                          </form>
                        </div>
                      </div>
                      <div class="actions">
                        <div class="qty-control flexitem">
                          <button class="minus circle">-</button>
                          <input type="text" value="1" />
                          <button class="plus circle">+</button>
                        </div>
                        <div class="button-cart">
                          <button class="primary-button">Add to cart</button>
                        </div>
                        <div class="wish-share">
                          <ul class="flexitem second-links">
                            <li>
                              <a href="#">
                                <span class="icon-large">
                                  <i class="ri-heart-line"></i>
                                </span>
                                <span>Whitelist</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon-large">
                                  <i class="ri-share-line"></i>
                                </span>
                                <span>Share</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="description collapse">
                        <ul>
                          <li
                            class={`hash-child   ${
                              expandedIndex === 0 ? "expand" : ""
                            }`}
                          >
                            <a
                              href="#0"
                              className="icon-small"
                              onClick={() => toggle(0)}
                            >
                              Information
                            </a>
                            <ul class="content">
                              <li>
                                <span>Brands</span> <span>Nike</span>
                              </li>
                              <li>
                                <span>Activity</span> <span>Running</span>
                              </li>
                              <li>
                                <span>Material</span> <span>Fleece</span>
                              </li>
                              <li>
                                <span>Gender</span> <span>Men</span>
                              </li>
                            </ul>
                          </li>

                          <li
                            class={`hash-child ${
                              expandedIndex === 1 ? "expand" : ""
                            }`}
                          >
                            <a
                              href="#0"
                              class="icon-small"
                              onClick={() => toggle(1)}
                            >
                              Details
                            </a>
                            <div class="content">
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Id ipsam harum reprehenderit
                                nihil laboriosam nobis doloribus ullam veritatis
                                facilis? Deleniti voluptates, dolore qui
                                dolorum, voluptatem officiis vero fugit amet
                                nobis sunt voluptatibus quis esse. Hic itaque
                                dicta voluptatem quia, dignissimos atque sit, ea
                                odit eos, magnam laborum iste recusandae
                                veritatis?
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Id ipsam harum reprehenderit
                                nihil laboriosam nobis doloribus ullam veritatis
                                facilis? Deleniti voluptates, dolore qui
                                dolorum, voluptatem officiis vero fugit amet
                                nobis sunt voluptatibus quis esse. Hic itaque
                                dicta voluptatem quia, dignissimos atque sit, ea
                                odit eos, magnam laborum iste recusandae
                                veritatis?
                              </p>
                            </div>
                          </li>

                          <li
                            class={`hash-child ${
                              expandedIndex === 2 ? "expand" : ""
                            }`}
                          >
                            <a
                              href="#0"
                              class="icon-small"
                              onClick={() => toggle(2)}
                            >
                              Custom
                            </a>
                            <div class="content">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Size</th>
                                    <th>
                                      Bust <span class="mini-text">(cm)</span>
                                    </th>
                                    <th>
                                      Waist <span class="mini-text">(cm)</span>
                                    </th>
                                    <th>
                                      HIp <span class="mini-text">(cm)</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>XS</td>
                                    <td>85</td>
                                    <td>63.5</td>
                                    <td>89</td>
                                  </tr>
                                  <tr>
                                    <td>M</td>
                                    <td>87.5</td>
                                    <td>67.5</td>
                                    <td>66.5</td>
                                  </tr>
                                  <tr>
                                    <td>L</td>
                                    <td>98</td>
                                    <td>72.5</td>
                                    <td>98</td>
                                  </tr>
                                  <tr>
                                    <td>XL</td>
                                    <td>93</td>
                                    <td>77</td>
                                    <td>103.2</td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </li>

                          <li
                            class={`hash-child ${
                              expandedIndex === 3 ? "expand" : ""
                            }`}
                          >
                            <a
                              href="#0"
                              class="icon-small"
                              onClick={() => toggle(1)}
                            >
                              Reviews <span class="mini-text"> 2.25k</span>
                            </a>
                            <div class="content">
                              <div class="reviews">
                                <h4>Customers Review</h4>
                                <div class="review-block">
                                  <div class="review-block-head">
                                    <div class="flexitem">
                                      <span class="rate-sum">4.9</span>
                                      <span>2,454 Reviews</span>
                                    </div>
                                    <a
                                      href="#review-form"
                                      class="secondary-button"
                                    >
                                      Write Review
                                    </a>
                                  </div>
                                  <div class="review-block-body">
                                    <ul>
                                      <li class="item">
                                        <div class="review-form">
                                          <p class="parson">Review By Sarah</p>
                                          <p class="mini-text">on 7/7/23</p>
                                        </div>
                                        <div class="review-rating rating">
                                          <div class="stars"></div>
                                        </div>
                                        <div class="review-title">
                                          <p>Awesome Product</p>
                                        </div>
                                        <div class="review-text">
                                          <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Vitae
                                            quas voluptate deleniti quod
                                            temporibus voluptates.
                                          </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div id="review-form" class="review-form">
                                    <h4>Write Review</h4>
                                    <div class="rating">
                                      <p>Are you satisfied enough?</p>
                                      <div class="rate-this">
                                        <input
                                          type="radio"
                                          name="rating"
                                          id="star5"
                                        />
                                        <label for="start5">
                                          <i class="ri-star-fill"></i>
                                        </label>
                                        <input
                                          type="radio"
                                          name="rating"
                                          id="star4"
                                        />
                                        <label for="star4">
                                          <i class="ri-star-fill"></i>
                                        </label>
                                        <input
                                          type="radio"
                                          name="rating"
                                          id="star3"
                                        />
                                        <label for="star3">
                                          <i class="ri-star-fill"></i>
                                        </label>
                                        <input
                                          type="radio"
                                          name="rating"
                                          id="star2"
                                        />
                                        <label for="star2">
                                          <i class="ri-star-fill"></i>
                                        </label>
                                        <input
                                          type="radio"
                                          name="rating"
                                          id="star1"
                                        />
                                        <label for="star1">
                                          <i class="ri-star-fill"></i>
                                        </label>
                                      </div>
                                    </div>
                                    <form action="">
                                      <p>
                                        <label>Name</label>
                                        <input type="text" />
                                      </p>
                                      <p>
                                        <label>Summary</label>
                                        <input type="text" />
                                      </p>
                                      <p>
                                        <label>Review</label>
                                        <textarea
                                          cols="30"
                                          rows="10"
                                        ></textarea>
                                      </p>
                                      <p>
                                        <a href="#" class="primary-button">
                                          Submit Review
                                        </a>
                                      </p>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Products />
        <Features />
        <Banner />
      </div>
    </div>
  );
}
