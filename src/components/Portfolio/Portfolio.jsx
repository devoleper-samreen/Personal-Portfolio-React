import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={100}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
        style={{ backgroundColor: 'indigo' }}
      >

        <SwiperSlide>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)', // Gradient here
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '40px 60px',
                color: 'white',
                fontSize: '28px',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Full Stack Blog App */}
              Blog Application
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)', // Gradient here
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '40px 60px',
                color: 'white',
                fontSize: '28px',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Mentor Booking App
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)', // Gradient here
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '40px 60px',
                color: 'white',
                fontSize: '28px',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Random Interview App
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)', // Gradient here
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '40px 60px',
                color: 'white',
                fontSize: '28px',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Video Sharing App
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f7971e, #ffd200)', // Gradient here
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '40px 60px',
                color: 'white',
                fontSize: '28px',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              Car Rental App
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div >
  );
};

export default Portfolio;
