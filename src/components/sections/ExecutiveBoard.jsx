import React from 'react'
import Image from 'next/image'

function ExecutiveBoard({ Content }) {
  return (
    <div className="container mil-content-frame mil-appearance " style={{ overflow: "hidden", textAlign: 'center' }}>
      <h2>Executive Board</h2>
      <div className="row justify-content-center">
        {Content.items.map((item, key) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>
            {/* team card */}
            <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
              <div className="mil-cover mil-long border-dark" style={{ height: '400px', width: '300px', margin: '0 auto' }}>
                <div className="mil-image-frame">
                  {/* Place Holder for Image */}
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    style={{ objectFit: 'cover' }} 
                    fill 
                  />
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
