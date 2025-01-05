import Header from "parts/Header"
import React, { Component } from 'react'
import Button from "elements/Button"
import Stepper from "elements/Stepper"
import Controller from "elements/Stepper/Controller"
import MainContent from "elements/Stepper/MainContent"
import Meta from "elements/Stepper/Meta"
import Numbering from "elements/Stepper/Numbering"
import BookingInformation from "parts/Checkout/BookingInformation"
import Completed from "parts/Checkout/Completed"
import Payment from "parts/Checkout/Payment"
import { connect } from "react-redux"
import { withRouter } from "utils/withRouter"
import { submitBooking } from "store/actions/checkout"


class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);
    payload.append("bankId", checkout.bankId);



    this.props.submitBooking(payload)
      .then(() => {
        nextStep()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout) {
      return (
        <div>
          <Header isCentered />
          <div className="container">
            <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
              <div className="col-4">
                Pilih kamar dulu
                <div>
                  <Button type="button" className="btn mt-5" isLight onClick={() => this.props.navigate(-1)}>
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page.detailsPage}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: <Payment data={data} checkout={checkout} ItemDetails={page.detailsPage} onChange={this.onChange} />,
      },
      completed: {
        title: "Yeay! Completed",
        description: null,
        content: <Completed />,
      },
    }

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} style={{ marginBottom: 50 }} />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" && data.lastName !== "" && data.email !== "" && data.phone !== "" && (
                    <Button type="button" className="btn mb-3" isBlock isPrimary hasShadow onClick={nextStep}>
                      Continue to Book
                    </Button>
                  )}

                  <Button
                    type="link"
                    className="btn"
                    isBlock
                    isLight
                    hasShadow
                    href={`/properties/${checkout._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" && data.bankName !== "" && data.bankHolder !== "" && (
                    <Button type="button" className="btn mb-3" isBlock isPrimary hasShadow onClick={() => this._Submit(nextStep)}>
                      Continue to Checkout
                    </Button>
                  )}

                  <Button type="button" className="btn" isBlock isLight onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button type="link" className="btn" isBlock isPrimary hasShadow href="/">
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page
})

export default withRouter(connect(mapStateToProps, { submitBooking })(Checkout))
