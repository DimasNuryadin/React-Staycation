import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import React, { Component } from 'react'
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Activities from "parts/Activities";
import { withRouter } from "utils/withRouter";

// Redux
import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {

  componentDidMount() {
    window.title = "Details Page"
    window.scrollTo(0, 0)

    if (!this.props.page[this.props.params.id])
      this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.params.id}`, 'detailsPage')
  }

  render() {
    const { page } = this.props;
    if (!page.detailsPage) return null

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page.detailsPage}
        />
        <FeaturedImage data={page.detailsPage.imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page.detailsPage} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={page.detailsPage} startBooking={this.props.checkoutBooking} />
            </div>
          </div>
        </section>
        <Activities data={page.detailsPage.activityId} />
        <Testimony data={page.detailsPage.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
})

export default withRouter(connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
))