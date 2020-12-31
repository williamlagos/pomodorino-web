import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import { Carousel, Box, TextInput, Image, Text, Heading, Button } from "grommet"

import Layout from "../components/layout"

const store = createStore(() => {}, {}, composeWithDevTools(applyMiddleware(thunk, logger)))

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <h1>Hello Pomodorino!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </Layout>
      </Provider>
    )
  }
}

export default Page
