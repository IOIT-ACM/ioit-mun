import Data from '@data/sections/hero-3.json';

const AboutFourSection = ({ Event }) => {
  return (
    <>
      {/* about */}
      <div className="mil-p-120-0 container">
        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
          <div className="col-xl-12 mil-mb-120">
            <h3
              className="mil-link mil-softened-60 mil-appearance mil-mb-30"
              style={{ fontSize: 40 }}
            >
              About {Event}
            </h3>
            {/* <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} /> */}
            <p
              className="mil-appearance mil-mb-30"
              style={{ textAlign: 'justify' }}
            >
              {Data[Event].description}
            </p>

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
      {/* about end */}
    </>
  );
};

export default AboutFourSection;
