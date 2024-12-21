import React from 'react'
import propTypes from 'prop-types'

Meta.propTypes = {
  data: propTypes.array,
  current: propTypes.number
}

export default function Meta({ data, current }) {
  return (
    <div className="text-center" style={{ marginBottom: 30 }}>
      <h1 className="h2">{data[current] && data[current].title}</h1>
      <p className="lead text-gray-500">
        {data[current] && data[current].description}
      </p>
    </div>
  )
}
