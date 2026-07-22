import ScrollStack, { ScrollStackItem } from "@components/ui/ScrollStack";
import Link from "next/link";
import Image from "next/image";
import committeesData from "@data/sections/services.json";
import heroData from "@data/sections/hero-3.json";

const cardColors = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
  "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
  "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
  "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
];

const CommitteesScrollStack = () => {
  return (
    <section style={{ backgroundColor: "#120F17", position: "relative" }}>
      <div style={{ padding: "60px 0 20px", textAlign: "center" }}>
        <h2 style={{
          color: "#fff",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          marginBottom: "10px"
        }}>
          Our Committees
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Scroll through our diverse range of committees
        </p>
      </div>

      <ScrollStack
        itemDistance={100}
        itemScale={0.04}
        itemStackDistance={30}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.82}
        rotationAmount={0}
        blurAmount={1}
      >
        {committeesData.items.map((committee, index) => {
          const detail = heroData[committee.title] || {};
          return (
            <ScrollStackItem key={committee.title}>
              <Link href={committee.id} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: cardColors[index % cardColors.length],
                  borderRadius: "32px",
                  padding: "clamp(20px, 3vw, 36px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(16px, 2vw, 28px)",
                  minHeight: "340px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(38, 167, 255, 0.3)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                >
                  {/* Committee Logo - Top */}
                  <div style={{
                    width: "100%",
                    height: "clamp(180px, 25vw, 280px)",
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.05)",
                    flexShrink: 0,
                  }}>
                    <Image
                      src={committee.icon}
                      alt={committee.title}
                      fill
                      style={{ objectFit: "contain", padding: "20px" }}
                    />
                  </div>

                  {/* Committee Info - Below */}
                  <div style={{ width: "100%" }}>
                    <span style={{
                      color: "rgba(38, 167, 255, 1)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}>
                      Committee {committee.num}
                    </span>

                    <h3 style={{
                      color: "#fff",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      margin: "6px 0 4px 0",
                    }}>
                      {committee.title}
                    </h3>

                    <h4 style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                      fontWeight: 500,
                      margin: "0 0 12px 0",
                    }}>
                      {committee.text}
                    </h4>

                    <p style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)",
                      lineHeight: 1.7,
                      margin: 0,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {detail.description}
                    </p>

                    <div style={{
                      marginTop: "16px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "rgba(38, 167, 255, 1)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}>
                      Explore Committee
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </section>
  );
};

export default CommitteesScrollStack;
