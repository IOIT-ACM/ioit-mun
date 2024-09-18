import React from 'react'

function ExecutiveBoard({Content}) {
  return (

<div className="container mil-content-frame mil-appearance mil-p-90">
<div className="row">
      {Content.items.map((item, key) => (
    <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>

        {/* team card */}
        <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
            <div className="mil-cover mil-long">
                <div className="mil-image-frame">
                   {/*  Place Holder for Image */}
                   {/*  <img src={item.image} alt={item.name} style={{'objectPosition': 'top' }} /> */}
                </div>
            </div>
            <div className="mil-overlay mil-with-bg mil-text-center">
                <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">{item.role}</span>
                </div>
            </div>
        </div>
        {/* team card end */}

    </div>
    ))}
   </div>
   </div>
  )
}

export default ExecutiveBoard