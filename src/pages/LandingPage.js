import Header from "parts/Header"
import Hero from "parts/Hero"
import MostPicked from "parts/MostPicked"
import React, { Component } from 'react'
import Categories from "parts/Categories"
import Testimony from "parts/Testimony"
import Footer from "parts/Footer"

// API
import { connect } from "react-redux"
import { fetchPage } from "store/actions/page"

class LandingPage extends Component {
  // Akan dijalankan pertama
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0, 0)

    if (!this.props.page.landingPage) {
      this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`, 'landingPage')
    }
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;

    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPicked} />
        <Categories data={page.landingPage.category} />
        <Testimony data={page.landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)