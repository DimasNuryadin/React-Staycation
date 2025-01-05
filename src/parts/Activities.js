import Button from "elements/Button"
import React from 'react'

export default function Activities({ data }) {
  if (data.length === 0) return null
  return (
    <section className="container">
      <h4 className="mb-3 font-weight-medium">Activities</h4>
      <div className="container-grid">
        {data.map((item, index2) => {
          return <div className="item column-3 row-1" key={`activity-item-${index2}`}>
            <div className="card">
              {item.isPopular && <div className="tag">
                Popular <span className="font-weight-light">Choice</span>
              </div>}

              <figure className="img-wrapper" style={{ height: 180 }}>
                <img src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item.name} className="img-cover" />
              </figure>
              <div className="meta-wrapper">
                <h5 className="h4">{item.name}</h5>
                <span className="text-gray-500">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
