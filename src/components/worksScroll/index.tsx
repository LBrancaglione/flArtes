import * as C from "./styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from '../../images/bannerScroll/scroll01.png';
import slide_image_2 from '../../images/bannerScroll/scroll02.jpg';
import slide_image_3 from '../../images/bannerScroll/scroll03.jpg';
import slide_image_4 from '../../images/bannerScroll/scroll04.jpg';
import slide_image_5 from '../../images/bannerScroll/scroll05.jpg';
import slide_image_6 from '../../images/bannerScroll/scroll06.jpg';
import slide_image_7 from '../../images/bannerScroll/scroll07.jpg';

export const WorksScroll = () => {
  return (
    <C.Card>
       <div className="container">
      <h1 className="heading">Trabalhos para Clientes</h1>
      <p className="heading-sub">oferecemos uma ampla gama de serviços gráficos e de design para atender a todas as suas necessidades</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            
          </div>
          <div className="swiper-button-next slider-arrow">
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </C.Card>
  );
};
