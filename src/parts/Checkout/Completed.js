import React from 'react'
import CompletedIllustration from 'assets/images/completed.jpg'

export default function Completed() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center text center">
        <div className="col-4">
          <img
            src={CompletedIllustration}
            className="img-fluid"
            alt="completed checkout apartment"
          />
          <p className="text-gray-500">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  )
}
