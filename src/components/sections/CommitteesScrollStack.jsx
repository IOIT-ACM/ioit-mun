import Data from "@data/sections/services.json";
import Link from "next/link";

const CommitteesScrollStack = () => {
    return (
        <div className="mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el">

            {/* dark black gradient background */}
            <div
                className="mil-just-image mil-section-bg mil-scale-imgmil-gradient-overlay "
                style={{
                    height: "150%",
                    background: "linear-gradient(135deg, #0F2030 0%, #050B14 100%)",
                    transition: "background 0.3s ease",
                }}
            ></div>

            <div className="row m-0">
                {Data.items.map((item, key) => (
                    <div
                        className="col-12 col-sm-6 col-lg-4 p-0"
                        key={`services-item-${key}`}
                        style={{ height: "150%" }}
                    >
                        {/* service card */}
                        <div className="mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover">
                            <div className="mil-cover mil-long"></div>
                            <Link href={item.id} className="mil-overlay mil-inside mil-between">
                                <div className="mil-mb-10"></div>

                                {/* icon */}
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ height: "clamp(220px, 24vw, 340px)" }}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        style={{
                                            maxWidth: "60%",
                                            maxHeight: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>

                                {/* text content */}
                                <div className="mil-bottom-part-hidden">
                                    <h5 className="mil-light">{item.title}</h5>
                                    <p
                                        className="mil-hidden-part mil-softened-40 mil-mb-30"
                                        style={{ fontSize: "15px" }}
                                    >
                                        {item.text}
                                    </p>
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

export default CommitteesScrollStack;
