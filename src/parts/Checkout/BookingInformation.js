import InputText from "elements/Form/InputText";
import React from 'react'

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
          <div className="card">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                className="img-cover"
                src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                alt={ItemDetails.title}
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5>{ItemDetails.title}</h5>
                  <span className="text-gray-500">
                    {ItemDetails.city}, {ItemDetails.country}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span>
                  ${+checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />
          <label htmlFor="email">Email</label>
          <InputText
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            onChange={props.onChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <InputText
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  )
}
