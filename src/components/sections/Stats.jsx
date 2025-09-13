"use client";

import React, { useEffect, useRef, useState } from "react";

const statsData = [
    { label: "Committees", value: 6, suffix: "" },
    { label: "Delegates", value: 90, suffix: "+" },
    { label: "Website Visits", value: 20000, suffix: "+" },
];

const PrizePool = 45000;

const Stats = () => {
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
                backgroundColor: "rgba(38, 50, 56, 1)",
                padding: "48px 6%",
                position: "relative",
            }}
        >
            <style>
                {`
          @media (max-width: 768px) {
            .stats-flex {
              flex-direction: column !important;
              gap: 32px !important;
              align-items: center !important;
              text-align: center !important;
            }
            .stats-left {
              max-width: 100% !important;
              text-align: center !important;
            }
            .stats-stats {
              flex-direction: column !important;
              gap: 18px !important;
            }
            .prize-wrapper {
              justify-content: center !important;
              text-align: center !important;
            }
          }
        `}
            </style>
            <div
                className="stats-flex"
                style={{
                    display: "flex",
                    gap: 48,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {/* Left text */}
                <div
                    className="stats-left"
                    style={{
                        minWidth: 200,
                        maxWidth: 260,
                        textAlign: "left",
                    }}
                >
                    <h3
                        className="stats-heading"
                        style={{
                            color: "#FFFFFF",
                            fontSize: "1.5rem",
                            margin: 0,
                        }}
                    >
                        Last Year Highlights
                    </h3>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "1rem",
                            marginTop: 8,
                            lineHeight: 1.3,
                        }}
                    >
                        Stats from MUN 2024 committees, countries and total participation.
                    </p>
                </div>

                {/* Stats numbers */}
                <div
                    className="stats-stats"
                    style={{
                        display: "flex",
                        gap: 36,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {statsData.map((stat, idx) => (
                        <div
                            key={idx}
                            className="stats-stat"
                            style={{
                                minWidth: 120,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                className="stats-number"
                                style={{
                                    fontSize: "2.2rem",
                                    fontWeight: 800,
                                    color: "rgba(38, 167, 255, 1)",
                                    lineHeight: 1,
                                }}
                            >
                                {counts[idx].toLocaleString()}
                                {stat.suffix || ""}
                            </div>
                            <div
                                className="stats-label"
                                style={{
                                    marginTop: 6,
                                    color: "#FFFFFF",
                                    fontWeight: 600,
                                    textAlign: "center",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prize Pool */}
                <div
                    className="prize-wrapper"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        minWidth: 200,
                        justifyContent: "flex-end",
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                            }}
                        >
                            Current Prize Pool
                        </div>
                        <div
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 800,
                                color: "rgba(255, 193, 7, 1)",
                                lineHeight: 1.2,
                            }}
                        >
                            ₹{prizeAmount.toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
