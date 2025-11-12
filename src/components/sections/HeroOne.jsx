import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";
import Image from "next/image";
import Link from "next/link";
const HeroOne = () => {
    return (
        <header>
            <div className="mil-hero-1" style={{backgroundColor: "white"}}>

                <div className="mil-image-frame">
                    <div className="mil-overay" />
                </div>

                <div className="container">
                    <div className="row mil-p-120-0 justify-content-between">
                        <div className="col-md-6 col-lg-6">

                            <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">{Data.subtitle}</div>
                            <h1 className="mil-light mil-appearance mil-mb-20">
                                {Data.title.before} <span className="mil-accent">{Data.title.accent}</span><br /> &#8220;{Data.title.after}&#8221;
                            </h1>
                            
                        </div>
                        <div className="col-md-12 col-lg-5 mil-relative">

                            <div className="mil-dots mil-appearance" />

                            

                                <p className="mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60" >
                                {/* <Link href="#" className="mil-mb-20 mil-button mil-button-rounded mil-button-md mil-scale-down-trigger mil-buttons-space">
                                        <span style={{fontSize: "15px"}}>Register Now</span>
                                </Link> */}
                                </p>

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
                                        style={{'objectPosition': '0% 55%', 'objectFit': 'cover'}}
                                        fill
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="col-12">

                            {/* partners */}

                            <div style={{  padding: '60px 0', paddingTop: '60px', borderTop: '1px solid rgba(255, 255, 255, 0.0)'}}>
                                <h3 className="mil-appearance mil-mb-40 d-flex justify-content-center align-items-center" style={{fontSize: 28, fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#212c33'}}>Our Partners</h3>

                                <Swiper
                                    {...sliderProps.milInfinitySlider}
                                    className="swiper-container mil-infinite-show"
                                >
                                    {Data.partners.map((item, key) => (
                                    <SwiperSlide key={`hero1-item-${key}`} className="swiper-slide">
                                        <a href={item.link} target="_blank" className="mil-partner-frame mil-hidden-trigger" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px'}}>
                                            <Image
                                                src={item.image} 
                                                alt={item.alt}
                                                width={200}
                                                height={100}
                                                style={{
                                                    objectFit: 'contain',
                                                    width: 'auto',
                                                    height: 'auto',
                                                    maxWidth: '200px',
                                                    maxHeight: '100px'
                                                }}
                                            />
                                        </a>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {/* partners end */}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroOne;