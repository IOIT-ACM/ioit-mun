import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";

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

const Hero2026 = () => {
    const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

    return (
        <header>
            <section className="mil-hero-2026">

                <div className="mil-hero-2026-bg">
                    <Image
                        src="/img/hero/hero.jpeg"
                        alt="IOIT MUN '26"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>

            </section>

            <div className="mil-hero-2026-cta mil-appearance">
                <div className="container">

                    <div className="mil-hero-2026-tagline">
                        <span className="mil-hero-2026-line" />
                        <p>Unity Through Diplomacy</p>
                        <span className="mil-hero-2026-line" />
                    </div>

                    <div className="mil-hero-2026-actions">
                        <Link
                            href="url"
                            className="mil-button mil-button-rounded mil-button-lg mil-scale-down-trigger mil-buttons-space mil-hero-2026-btn"
                        >
                            <span>Register Now</span>
                        </Link>
                        <Link
                            href="url"
                            className="mil-button mil-button-rounded mil-button-lg mil-button-linear mil-scale-down-trigger mil-buttons-space mil-hero-2026-btn"
                        >
                            <span>Download Brochure</span>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="mil-hero-2026-countdown">
                <div className="container">
                    <p className="mil-hero-2026-countdown-title">The Countdown Begins</p>
                    <div className="mil-countdown">
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
                </div>
            </div>

            <div className="mil-hero-2026-partners">
                <div className="container">
                    <h3 className="mil-hero-2026-partners-title">Our Partners</h3>

                    <Swiper
                        {...sliderProps.milInfinitySlider}
                        className="swiper-container mil-infinite-show"
                    >
                        {Data.partners.map((item, key) => (
                        <SwiperSlide key={`hero2026-item-${key}`} className="swiper-slide">
                            <a href={item.link} target="_blank" className="mil-partner-frame" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px'}}>
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
            </div>
        </header>
    );
};
export default Hero2026;
