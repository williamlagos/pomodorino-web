/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Main, Grommet, grommet } from "grommet"
import Header from "./Header"

import "./layout.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children } : LayoutProps) => (
  <Grommet theme={grommet}>
    <Header siteTitle="Pomodorino"/>
    <Main style={{ textAlign: "center" }}>
      {children} 
    </Main>
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
