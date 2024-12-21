import React from 'react'
import propTypes from 'prop-types'

MainContent.propTypes = {
  data: propTypes.array,
  current: propTypes.number
}

export default function MainContent({ data, current }) {
  return (
    <div>
      {data[current] && data[current].content}
    </div>
  )
}
