import Header from "parts/Header"
import React from 'react'
import landingPage from 'json/landingPage.json'
import Hero from "parts/Hero"

export default function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Hero data={landingPage.hero} />
    </div>
  )
}
