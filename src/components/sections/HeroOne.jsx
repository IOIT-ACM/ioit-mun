import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-10-24T00:00:00");

function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calc = () => {
            const now = new Date();
            const diff = Math.max(0, targetDate - now);
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        };
        setTimeLeft(calc());
        const timer = setInterval(() => setTimeLeft(calc()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}

const HeroOne = () => {
    const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

    return (
        <header>
            <div className="mil-hero-1" style={{backgroundColor: "white"}}>

                <div className="mil-image-frame">
                    <div className="mil-overay" />
                </div>

                <div className="container">
                    <div className="row mil-p-120-0 justify-content-between align-items-center">
                        
                        {/* Left column - Countdown */}
                        <div className="col-md-6 col-lg-6 mil-countdown-col">
                            <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">{Data.subtitle}</div>
                            <h1 className="mil-light mil-appearance mil-mb-20">
                                {Data.title.before} <span className="mil-accent">{Data.title.accent}</span><br /> &#8220;{Data.title.after}&#8221;
                            </h1>

                            <div className="mil-countdown mil-appearance mil-mb-30">
                                <div className="mil-countdown-item">
                                    <span className="mil-countdown-number">{String(days).padStart(2, '0')}</span>
                                    <span className="mil-countdown-label">Days</span>
                                </div>
                                <div className="mil-countdown-item">
                                    <span className="mil-countdown-number">{String(hours).padStart(2, '0')}</span>
                                    <span className="mil-countdown-label">Hours</span>
                                </div>
                                <div className="mil-countdown-item">
                                    <span className="mil-countdown-number">{String(minutes).padStart(2, '0')}</span>
                                    <span className="mil-countdown-label">Minutes</span>
                                </div>
                                <div className="mil-countdown-item">
                                    <span className="mil-countdown-number">{String(seconds).padStart(2, '0')}</span>
                                    <span className="mil-countdown-label">Seconds</span>
                                </div>
                            </div>

                            <div className="mil-scroll-animation-1 mil-appearance mil-mb-60">
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                                <i className="fas fa-chevron-down" />
                            </div>
                        </div>

                        {/* Right column - Image */}
                        <div className="col-md-6 col-lg-6 mil-relative">
                            <div className="mil-dots mil-appearance" />
                            <div className="mil-appearance">
                                {/* height to be decided */}
                                <div className="mil-just-image" style={{paddingBottom: '0', height: '700px'}}>    
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

                            <div style={{  padding: '60px 0', paddingTop: '200px', borderTop: '1px solid rgba(255, 255, 255, 0.0)'}}>
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
                                                height={150}
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