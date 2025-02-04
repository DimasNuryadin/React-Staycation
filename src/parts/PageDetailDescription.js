import React from 'react'
import parse from 'html-react-parser';
import propTypes from 'prop-types'

PageDetailDescription.propTypes = {
  data: propTypes.object
}

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0 ? "Tidak ada feature" :
          data.featureId.map((feature, index) => {
            return (
              <div key={`feature-${index + 1}`} className="col-3" style={{ marginBottom: 20 }}>
                <img
                  width="38"
                  src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                  alt={feature.name}
                  className="d-block mb-2"
                />
                <span>{feature.qty} <span className="text-gray-500 font-weight-light">{feature.unit}</span></span>
                <span className="text-gray-500 font-weight-light">{feature.name}</span>
              </div>
            );
          })}
      </div>
    </main>
  )
}
