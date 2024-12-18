import Header from "parts/Header"
import landingPage from 'json/landingPage.json'
import Hero from "parts/Hero"
import MostPicked from "parts/MostPicked"
import React, { Component } from 'react'
import Categories from "parts/Categories"
import Testimony from "parts/Testimony"
import Footer from "parts/Footer"

export default class LandingPage extends Component {
  // Akan dijalankan pertama
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  // state = {
  //   value: "1"
  // }

  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection"
  //   }
  // }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
        {/* <InputNumber
          max={30}
          suffix=" night"
          onChange={this.handleChange}
          isSuffixPlural
          name="value"
          value={this.state.value}
        /> */}

        {/* <InputDate
          max={30}
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        /> */}
      </>
    )
  }
}
