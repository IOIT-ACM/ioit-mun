import Data from "@data/sections/hero-3.json";
import Link from "next/link";
import Image from "next/image";

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
                                <Link href={Data[Event].link} className="mil-button mil-button-rounded mil-button-lg mil-scale-down-trigger mil-buttons-space">
                                    <span>{Data.button1.label}</span>
                                </Link>
                                {/* <Link href="" className="mil-link-hover"><div data-tf-live="01HBVEED1KMVTW0M7MFH2ES3WX"></div><script src="//embed.typeform.com/next/embed.js"></script></Link> */}
                                {/* <Link href="#" target="_blank" className="mil-button mil-button-linear mil-button-rounded mil-button-lg mil-scale-down-trigger mil-buttons-space">
                                    <span>Register</span>
                                </Link>      */}
                                 {/* buttons end */}

                            </div>

                        </div>
                        <div className="col-lg-5">

                                <div className="mil-hero-illustration mil-hero-curtain">
                                    <div className="mil-gradient" />
                                    <Image src="/img/hero/flying-red-silk.png" alt="Flying Red Silk" width={1472} height={2616} className="mil-curtain-silk" />
                                    <Image src={Data[Event].logo} alt="Event Logo" className="mil-photo"  style={{paddingTop: "25%"}} fill/>
                                {/* <img src={Data[Event].logo} alt="Event Logo" className="mil-photo"/> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroThree;