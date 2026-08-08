import Data from "@data/sections/hero-3.json";
import Image from "next/image";
import executiveBoard from "@data/sections/executive-board";

const AboutFourSection = ({Event}) => {
  const eb = executiveBoard[Event];
  return (
    <>
        {/* about */}
        <div className="container mil-p-120-0">

            <div className="row flex-sm-row-reverse justify-content-between align-items-center">

                <div className="mil-text-center mil-p-0-60 mil-appearance">
                    <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30" style={{fontSize: 40}}>About {Event}</h3>
                    {/* <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} /> */}
                    <p className="mil-appearance mil-mb-30" style={{textAlign: "justify"}}>{Data[Event].description}</p>

                    {/* {Data.items.map((item, key) => (
                    <div key={`about4-item-${key}`} className={`mil-icon-box mil-box-hori mil-appearance${key != (Data.items.length - 1) ? " mil-mb-15" : ""}`}>
                        <div className="mil-icon mil-accent">
                            <img src={item.icon} alt={item.label} />
                        </div>
                        <div className="mil-icon-box-text">
                            <h6>{item.label}</h6>
                            <p>{item.value}</p>
                        </div>
                    </div>
                    ))} */}
                </div>

                {/* <div className="col-xl-5 mil-mb-120">

                    <div className="mil-collage-3 mil-appearance">
                        <div className="mil-image-1 mil-appearance">
                            <div className="mil-just-image mil-image-square">
                                <img src={Data.image1} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" style={{'objectPosition': "top left"}} />
                            </div>
                        </div>
                        <div className="mil-image-2 mil-appearance">
                            <div className="mil-just-image mil-image-square">
                                <img src={Data.image2} alt="img" />
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>

        </div>

        {/* executive board */}
        {eb && (
            <div className="mil-text-center mil-p-0-120 mil-appearance">
                <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30" style={{fontSize: 40}}>Executive Board</h3>
                <div className="mil-mb-30" style={{position: "relative", width: "100%", maxWidth: 400, margin: "0 auto"}}>
                    <div className="mil-just-image" style={{paddingBottom: "125%"}}>
                        <Image src={eb.image} alt={eb.name} fill sizes="(min-width: 768px) 400px, 100vw" style={{objectFit: "cover", objectPosition: "center"}} />
                    </div>
                </div>
                <h5 className="mil-mb-100 mil-light" style={{marginTop: 20}}>{eb.name}</h5>
                <span className="mil-link mil-softened-50">{eb.role}</span>
            </div>
        )}
        {/* executive board end */}
    </>
  );
};

export default AboutFourSection;