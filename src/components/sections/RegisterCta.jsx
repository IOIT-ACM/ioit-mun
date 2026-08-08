import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const statsData = [
    { label: "Attendees", value: 3000, suffix: "+" },
    { label: "Delegates", value: 300, suffix: "+" },
    { label: "Website Visits", value: 25000, suffix: "+" },
];

const PrizePool = 300000;

const RegisterCta = () => {
    const [counts, setCounts] = useState(statsData.map(() => 0));
    const [prizeAmount, setPrizeAmount] = useState(0);
    const sectionRef = useRef(null);
    const animated = useRef(false);

    useEffect(() => {
        const animate = () => {
            const start = performance.now();
            function tick(now) {
                const t = Math.min((now - start) / 2000, 1);
                const ease = 1 - Math.pow(1 - t, 3);
                setCounts(statsData.map((s) => Math.floor(s.value * ease)));
                setPrizeAmount(Math.floor(PrizePool * ease));
                if (t < 1) requestAnimationFrame(tick);
                else {
                    setCounts(statsData.map((s) => s.value));
                    setPrizeAmount(PrizePool);
                }
            }
            requestAnimationFrame(tick);
        };
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;
                    animate();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            style={{
                padding: "64px 6%",
                position: "relative",
            }}
        >
            <style>
                {`
          @media (max-width: 768px) {
            .cta-flex {
              flex-direction: column !important;
              gap: 40px !important;
              text-align: center !important;
              align-items: center !important;
            }
            .cta-left {
              align-items: center !important;
              text-align: center !important;
            }
            .cta-stats {
              justify-content: center !important;
            }
          }
        `}
            </style>

            <div
                className="cta-flex"
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    gap: 48,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {/* tagline + register */}
                <div
                    className="cta-left"
                    style={{
                        minWidth: 260,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <p
                        style={{
                            color: "#E8C15A",
                            fontSize: "1.3rem",
                            fontWeight: 600,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            margin: 0,
                        }}
                    >
                        Be a part of something bigger
                    </p>

                    <h3
                        style={{
                            color: "#E8C15A",
                            fontSize: "5.5rem",
                            fontWeight: 800,
                            margin: "16px 0 32px",
                            lineHeight: 1,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        Be the Change.
                    </h3>

                    <Link
                        href="url"
                        className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space"
                        style={{ borderRadius: 0 }}
                    >
                        <span>Register Now</span>
                    </Link>
                </div>

                {/* stats on the side */}
                <div
                    className="cta-stats"
                    style={{
                        display: "flex",
                        gap: 48,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        minWidth: 260,
                    }}
                >
                    {statsData.map((stat, idx) => (
                        <div
                            key={idx}
                            style={{
                                minWidth: 100,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "2.2rem",
                                    fontWeight: 800,
                                    color: "#E8C15A",
                                    lineHeight: 1,
                                }}
                            >
                                {counts[idx].toLocaleString(["en-IN"])}
                                {stat.suffix || ""}
                            </div>
                            <div
                                style={{
                                    marginTop: 6,
                                    color: "#F5F1E8",
                                    fontWeight: 600,
                                    textAlign: "center",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}

                    <div
                        style={{
                            minWidth: 180,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ fontSize: "1rem", fontWeight: 600, color: "#F5F1E8" }}>
                            Current Prize Pool
                        </div>
                        <div
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 800,
                                color: "#E8C15A",
                                lineHeight: 1.2,
                            }}
                        >
                            ₹{prizeAmount.toLocaleString(["en-IN"])}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCta;
