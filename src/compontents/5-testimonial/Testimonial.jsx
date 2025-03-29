import "./testimonial.css";
import Card from "./card/Card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="section__container testimonial__container">
        <div className="testimonial__content">
          <h2 className="section__header">
            What Our Happy Clients Say About Us
          </h2>

          <p className="section__description">
            Hear from our satisfied members who have transformed their fitness
            journey with FITNESXIA! Their success stories and experiences
            showcase the effectiveness of our programs, expert guidance, and
            supportive environment.
          </p>
        </div>

        <div className="testimonial__swiper">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
