import Data from "@data/sections/services.json";
import Link from "next/link";
import Image from "next/image";

const ServicesSection = () => {
    return (
        <div className="mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el">

            {/* background image */}
            <div className="mil-just-image mil-section-bg mil-scale-img" data-value-1="1" data-value-2="1.1" style={{ height: "150%" }}>
                <Image src={Data.bg_image} alt="image" fill/>
            </div>
            <div className="mil-gradient-overlay"></div>

            <div className="row m-0">
                {Data.items.map((item, key) => (
                    <div className="col-12 col-sm-6 col-lg-4 p-0" key={`services-item-${key}`} style={{ height: "150%" }}>

                        {/* service card */}
                        <div className="mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover" >
                            <div className="mil-cover mil-long"></div>
                            <Link href={item.id} className="mil-overlay mil-inside mil-between">

                                {/* icon */}
                                <div className="mil-mb-10"></div>
                                <div className="d-flex justify-content-center align-items-center" >
                                    <Image src={item.icon} alt={item.title} 
                                      width={300}
                                      height={300}
                                      layout="responsive"
                                      objectFit="contain"
                                    style={{
                                        padding: "30% 10% 10% 10%",
                                    }} />
                                </div>
                                {/* number */}
                                {/* <div className="mil-text-lg mil-softened-40">{item.num}</div> */}
                                <div className="mil-bottom-part-hidden">
                                    {/* text */}
                                    <h5 className="mil-light">{item.title}</h5>
                                    <p className="mil-hidden-part mil-softened-40 mil-mb-30" style={{ fontSize: "15px" }}>{item.text}</p>
                                </div>
                            </Link>
                        </div>
                        {/* service card end */}

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ServicesSection;