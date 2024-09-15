import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el">

        {/* background image */}
        <div className="mil-just-image mil-section-bg mil-scale-img" data-value-1="1" data-value-2="1.1">
            <img src={Data.bg_image} alt="image" />
        </div>
        <div className="mil-gradient-overlay"></div>

        <div className="row m-0">
            {Data.items.map((item, key) => (
            <div className="col-xl-6 col-lg-12" key={`services-item-${key}`}>
                {/* service card */}
                <Link href={`/services/${item.id}`} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                              <div className="mil-card-content">
                                  {/* icon */}
                                  <img src={item.image} alt={item.title} className="mil-card-icon" />
                                  <div>
                                      {/* text */}
                                      <h5 className="mil-mb-10">{item.title}</h5>
                                      <p className="mil-softened-40">{item.short}</p>
                                  </div>
                              </div>
                          </Link>
                {/* service card end */}

            </div>
            ))}
        </div>

    </div>
  );
};

export default ServicesSection;