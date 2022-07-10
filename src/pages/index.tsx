import React, { useEffect, useState } from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import { Carousel, Box, TextInput, Image, Text, Heading, Button } from "grommet"

import Layout from "../components/layout"

const store = createStore(() => {}, {}, composeWithDevTools(applyMiddleware(thunk, logger)))

const Page = (props) => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setInterval(
      () => setDate(new Date()),
      1000
    )
  })
  return (
    <Provider store={store}>
      <Layout>
        <h1>Hello Pomodorino!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </Layout>
    </Provider>
  )
}

export default Page
