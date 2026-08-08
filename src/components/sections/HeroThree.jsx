import Data from "@data/sections/hero-3.json";
import Image from "next/image";
import SpecularButton from "@components/ui/SpecularButton";
import TiltedCard from "@components/ui/TiltedCard";

const HeroThree = ({Event}) => {
    return (
        <header>
            <div className="mil-hero-2">

                <div className="container align-items-center">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-lg-7">

                            <div className="mil-hero-text">

                                {/* <div className="mil-hero-avatar mil-mb-20">
                                    <img src={Data.avatar.image} alt={Data.avatar.name} />
                                    <h6>{Data.avatar.name}</h6>
                                </div> */}

                                <h1 className="mil-h2 mil-mb-30">{Event}</h1>
                                {/* <p className="mil-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} /> */}
                                <h1 className="mil-h4 mil-mb-30">{Data[Event].title}{/*United Nations Security Counsil*/}</h1>
                                <p className="mil-mb-30" style={{fontSize: "25px"}}> {Data[Event].Agenda}{/*Strengthening International Cooperation in Cybersecurity*/}.</p>

                                {/* buttons */}
                                <SpecularButton
                                    href={Data[Event].link}
                                    className="mil-scale-down-trigger"
                                    size="lg"
                                    radius={8}
                                    tint="#D4A43A"
                                    tintOpacity={0.92}
                                    textColor="#0B0F14"
                                    lineColor="#FFF6DE"
                                    baseColor="#8A6A22"
                                    shineSize={14}
                                    shineFade={45}
                                    thickness={1.5}
                                    speed={0.3}
                                    followMouse
                                    proximity={260}
                                >
                                    {Data.button1.label}
                                </SpecularButton>
                                {/* buttons end */}

                            </div>

                        </div>
                        <div className="col-lg-5">

                                <div className="mil-hero-illustration mil-hero-curtain">
                                    <div className="mil-gradient" />
                                    <Image src="/img/hero/flying-red-silk.png" alt="Flying Red Silk" width={1472} height={2616} className="mil-curtain-silk" />
                                    <TiltedCard
                                        imageSrc={Data[Event].logo}
                                        altText="Event Logo"
                                        className="mil-photo"
                                        containerWidth="100%"
                                        containerHeight="60%"
                                        imageWidth="100%"
                                        imageHeight="100%"
                                        rotateAmplitude={10}
                                        scaleOnHover={1.06}
                                        showMobileWarning={false}
                                        showTooltip={false}
                                    />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroThree;