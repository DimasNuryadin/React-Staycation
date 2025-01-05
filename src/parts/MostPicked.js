import Button from "elements/Button"
import React from 'react'
import propTypes from 'prop-types'

MostPicked.propTypes = {
  data: propTypes.any,
}

export default function MostPicked(props) {
  return (
    <section className="container xyz-in" xyz="fade down-50%" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid" xyz="fade small stagger">
        {props.data.map((item, index) => {
          return (
            <div className={`item column-4 xyz-in ${index === 0 ? " row-2" : " row-1"}`} key={index + 1}>
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}{" "}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`} alt={item.title} />
                </figure>
                <div className="meta-wrapper">
                  <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                    <h5>{item.title}</h5>
                  </Button>
                  <span>{item.city}, {item.country}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
