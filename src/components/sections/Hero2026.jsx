import { useState, useEffect } from "react";
import Image from "next/image";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";
import GradientText from "@components/ui/GradientText";
import SpecularButton from "@components/ui/SpecularButton";

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

function CountdownUnit({ value, label }) {
    const display = String(value).padStart(2, '0');
    return (
        <div className="mil-countdown-item">
            <span className="mil-countdown-number-mask">
                <span key={display} className="mil-countdown-number">{display}</span>
            </span>
            <span className="mil-countdown-label">{label}</span>
        </div>
    );
}

const Hero2026 = () => {
    const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

    return (
        <header>
            <section className="mil-hero-2026">

                <div className="mil-hero-2026-media">
                    <div className="mil-hero-2026-bg">
                        <Image
                            src="/img/hero/hero.webp"
                            alt="IOIT MUN '26"
                            fill
                            priority
                            sizes="100vw"
                        />
                    </div>

                    <div className="mil-hero-2026-scrim" />
                </div>

                <div className="mil-hero-2026-text">
                    <div className="mil-hero-2026-title">
                        <h1>
                            <GradientText
                                colors={["#D4A43A", "#F8E3A3", "#D4A43A"]}
                                animationSpeed={5}
                                showBorder={false}
                                className="mil-hero-2026-gradienttext"
                            >
                                IOIT MUN &apos;26
                            </GradientText>
                        </h1>
                    </div>

                    <div className="mil-hero-2026-dates">
                        <p>24TH-25TH OCTOBER 2026</p>
                    </div>

                    <div className="mil-hero-2026-tagline">
                        <span className="mil-hero-2026-line" />
                        <p>Unity Through Diplomacy</p>
                        <span className="mil-hero-2026-line" />
                    </div>

                    <div className="mil-hero-2026-actions">
                        <SpecularButton
                            href="https://unstop.com/conferences/ioit-mun-2026-tenet-aissms-institute-of-information-technology-pune-maharashtra-1699491"
                            className="mil-scale-down-trigger"
                            size="lg"
                            radius={8}
                            tint="#D4A43A"
                            tintOpacity={0.92}
                            textColor="#0B0F14"
                            lineColor="#FFF6DE"
                            baseColor="#8A6A22"
                            intensity={1}
                            shineSize={14}
                            shineFade={45}
                            thickness={1.5}
                            speed={0.3}
                            followMouse
                            proximity={260}
                        >
                            Register Now
                        </SpecularButton>
                        <SpecularButton
                            href="/brochures/delegate-brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mil-scale-down-trigger"
                            size="lg"
                            radius={8}
                            tint="#F5F1E8"
                            tintOpacity={0.05}
                            textColor="#F5F1E8"
                            lineColor="#D4A43A"
                            baseColor="#9C8A5E"
                            intensity={1}
                            shineSize={14}
                            shineFade={45}
                            thickness={1.5}
                            speed={0.3}
                            followMouse
                            proximity={260}
                        >
                            Download Brochure
                        </SpecularButton>
                    </div>
                </div>

            </section>

            <div className="mil-hero-2026-countdown">
                <div className="container">
                    <div className="mil-hero-2026-countdown-heading">
                        <span className="mil-hero-2026-countdown-line" />
                        <p className="mil-hero-2026-countdown-title">The Countdown Begins</p>
                        <span className="mil-hero-2026-countdown-line" />
                    </div>
                    <div className="mil-countdown">
                        <CountdownUnit value={days} label="Days" />
                        <CountdownUnit value={hours} label="Hours" />
                        <CountdownUnit value={minutes} label="Minutes" />
                        <CountdownUnit value={seconds} label="Seconds" />
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
