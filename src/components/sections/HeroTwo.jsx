import Data from "@data/sections/hero-2.json";
import Link from "next/link";

const HeroTwo = () => {
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

                                <h1 className="mil-h3 mil-mb-10" style={{ marginTop: "50px" }}>{Data.title}</h1>


                                {/* buttons */}
                                {/* <Link href={Data.button1.link} className="mil-button mil-button-rounded mil-button-lg mil-scale-down-trigger mil-buttons-space">
                                    <span>{Data.button1.label}</span>
                                </Link> */}
                                {/* <Link href="" className="mil-link-hover"><div data-tf-live="01HBVEED1KMVTW0M7MFH2ES3WX"></div><script src="//embed.typeform.com/next/embed.js"></script></Link> */}
                                {/* <Link href={Data.button1.link} className="mil-button mil-button-rounded mil-button-md mil-button-dark mil-scale-down-trigger mil-accent-trigger mil-buttons-space mil-mb-20">
                                    <span>{Data.button1.label}</span>
                                </Link> */}
                                {/* buttons end */}

                                <p className="">Dear fellow delegates and participants,<br/>

                                    I am delighted to welcome you to the Model United Nations (MUN) platform. As Secretary-General, it is my honor to address a community of passionate individuals dedicated to diplomacy, global issues, and positive change. MUN empowers us to simulate real-world diplomacy, fostering critical thinking, negotiation, and collaboration. In this interconnected world, your participation is more vital than ever. Together, we can bridge divides, find innovative solutions, and inspire a brighter future. Let us embrace the principles of the United Nations, striving for peace, justice, and sustainable development. I look forward to your invaluable contributions and the impact we will create together.</p>

                            </div>

                        </div>
                        <div className="col-lg-5">

                            <div className="mil-hero-illustration">
                                <div className="mil-gradient" />
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="958" height="959" viewBox="0 0 958 959">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect id="Rectangle_3720" data-name="Rectangle 3720" width="958" height="959" transform="translate(2284 123)" fill="#fffefe" />
                                        </clipPath>
                                    </defs>
                                    <g id="Mask_Group_25" data-name="Mask Group 25" transform="translate(-2284 -123)" clipPath="url(#clip-path)">
                                        <path id="Path_7024" data-name="Path 7024" d="M116.478,29.331C320.56,4.556,676.039-18.468,839.536,40.994,1043.9,115.322,141,298.727,132.336,325.755s690.746,90.258,707.2,161.208C852.7,543.722,62.831,616.3,42.841,632.241s734.1,132.716,717.025,199.334S132.109,899.146,135.5,956.582,514.8,1095.1,514.8,1095.1" transform="translate(2222.807 322.827) rotate(-20)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="110" />
                                    </g>
                                </svg>
                                <div className="mil-bg" style={{ backgroundColor: "#03456D" }} />
                                <img src={Data.image.url} alt="Secretariat" className="mil-photo-secretariat" />
                                {/* <img src={Data[Event].logo} alt="Event Logo" className="mil-photo"/> */}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroTwo;
