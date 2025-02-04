import React from 'react'
import propTypes from 'prop-types'

FeaturedImage.propTypes = {
  data: propTypes.array,
}

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index + 1}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${index > 0 ? "row-1" : "row-2"}`}
            >
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img className="img-cover" src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item._id} />
                </figure>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
