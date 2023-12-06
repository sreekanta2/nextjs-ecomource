"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const images = [
  "assets/slider/slider0.jpg",
  "assets/slider/slider1.jpg",
  "assets/slider/slider2.jpg",
];
export default function SideBanner() {
  return (
    <div class="slider">
      <div class="container">
        <div class="wrapper">
          <Swiper loop={true}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div class="item">
                  <div class="image object-cover">
                    <img src={image} alt="slider image" />
                  </div>
                  <div class="text-content flexcol">
                    <h4>Quick Fashion</h4>
                    <h2>
                      <span>Come and Get it!</span>
                      <br /> <span>Brand New Shoes</span>
                    </h2>
                    <a href="#" class="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
