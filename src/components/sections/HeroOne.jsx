import { sliderProps } from '@/src/common/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '@data/sections/hero-1.json';
import Image from 'next/image';
const HeroOne = () => {
  return (
    <header>
      <div className="mil-hero-1">
        <div className="mil-image-frame">
          <div className="mil-overay" />
        </div>

        <div className="container">
          <div className="row mil-p-120-0 justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">
                {Data.subtitle}
              </div>
              <h1 className="mil-light mil-appearance mil-mb-20">
                {Data.title.before}{' '}
                <span className="mil-accent">{Data.title.accent}</span>
                <br /> &#8220;{Data.title.after}&#8221;
              </h1>
            </div>
            <div className="col-md-12 col-lg-5 mil-relative">
              <div className="mil-dots mil-appearance" />

              {/* <p className="mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60" >
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScKBr0OO-J1FD396iBeOQKHenTP3Q803khfvRXfjCEa-gCWnA/viewform?usp=sf_link" className="mil-mb-20 mil-button mil-button-rounded mil-button-md mil-scale-down-trigger mil-buttons-space">
                                        <span style={{fontSize: "15px"}}>Register Has been Closed</span>
                                </Link>
                                </p> */}

              <div className="mil-scroll-animation-1 mil-appearance mil-mb-60">
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            <div className="col-12">
              <div className="mil-appearance">
                <div className="mil-just-image">
                  <Image
                    src={Data.image}
                    alt="img"
                    className="mil-scale-img"
                    data-value-1="1"
                    data-value-2="1.15"
                    style={{ objectPosition: 'center 25%' }}
                    fill
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              {/* partners */}

              <h3
                className="mil-link mil-softened-60 mil-appearance mil-mb-10 d-flex justify-content-center align-items-center pt-5"
                style={{ fontSize: 24 }}
              >
                Our Partners
              </h3>

              <Swiper
                {...sliderProps.milInfinitySlider}
                className="swiper-container mil-infinite-show"
                style={{ backgroundColor: '' }}
              >
                {Data.partners.map((item, key) => (
                  <SwiperSlide
                    key={`hero1-item-${key}`}
                    className="swiper-slide"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      className="mil-partner-frame mil-hidden-trigger"
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={200}
                        height={100}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* partners end */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeroOne;
