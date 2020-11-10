import React from "react"
import FooterContextProvider from "../../context/FooterContext"
import FooterSection from "../sections/FooterSection"
import HeaderSection from "../sections/HeaderSection"

import "./layout.css"

function Layout({ children }) {
  return (
    //This is the new file experiment
    <>
      {/* <HeaderSection/> */}
      <main>{children}</main>
      <FooterContextProvider>
        <FooterSection />
      </FooterContextProvider>
    </>
  )
}

export default Layout
