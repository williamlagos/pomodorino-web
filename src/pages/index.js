import React from "react"
// import Media from "react-media"
// import { Carousel, Box, TextInput, Image, Text, Heading, Button } from "grommet"

import Layout from "../components/layout"
/*import SEO from "../components/seo"

import factImage from "../images/fact.svg"
import emailImage from "../images/email.svg"
import passwordImage from "../images/password.svg"
import mockupImage from "../images/mockup.png"
import bgImage from "../images/bg.png"

const Fact = ({text, number}) => (
  <Box pad="small" direction="column">
    <Image alignSelf="start" src={factImage} alt="Fact" />
    <Heading color="#00CED1" margin="none" level={4}>FACT #{number}</Heading>
    <Text>{text}</Text>
  </Box>
)

const Register = (size) => (
  <Box pad="small" background={{ "color": "#00CED1", "opacity": 0.2, "repeat": "no-repeat", "size": "cover" }}>
    <Box pad="small" direction={size === "middle" ? "row" : "column"}>
      <TextInput icon={<Image src={emailImage}/>} placeholder="E-mail" />
      <TextInput icon={<Image src={passwordImage}/>} placeholder="Password" />
    </Box>
    <Box pad="small">
      <Button primary label="Get Started" />
    </Box>
  </Box>
)

const IndexPage = () => (
  <Media queries={{ small: "(max-width: 599px)" }}>
    { matches => (
      <Layout>
        <Box background={!matches.small && {
        "opacity": true,
        "position": "right",
        "repeat": "no-repeat",
        "size": "contain",
        "image": `url(${bgImage})`
        }}>
        <SEO title="Home" />
        <Box direction="row">
          <Box pad="medium">
            <Box>
              <Heading color="#00CED1" level={3}>jifcam</Heading>
              <Heading margin="none"><strong>GET MORE</strong> Views</Heading>
              <Heading margin="none"><strong>COLLAB</strong> with other creators</Heading>
              <Heading margin="none"><strong>SHOWCASE</strong> your talent</Heading>
              <Heading color="#8E8E8E" level={2}>with<br/> <strong>Mini Vertical Videos on Jifcam</strong></Heading>
            </Box>
            <Box direction="row">
              { matches.small ? (
                <Carousel>
                  <Fact number={1} text="Vertical video viewing has increased by 277% in the last year"/>
                  <Fact number={2} text="Short videos are 97% more likely to be watched entirely"/>
                  <Fact number={3} text="Easily Get started by importing videos directly from your Youtube channel"/>
                </Carousel> ) : (
                <>
                  <Fact number={1} text="Vertical video viewing has increased by 277% in the last year"/>
                  <Fact number={2} text="Short videos are 97% more likely to be watched entirely"/>
                  <Fact number={3} text="Easily Get started by importing videos directly from your Youtube channel"/>
                </>
              )}
            </Box>
            { !matches.small && <Register size="middle"/>}
          </Box>
          <Box>
            { !matches.small ? (
                <Image fit="contain" src={mockupImage} />
              ) : (
                <Image fit="contain" src={mockupImage} />
              )
            }
          </Box>
        </Box>
        { matches.small && <Register size="small"/> }
        </Box>
      </Layout>
    )}
  </Media>
)*/

const Page = () => (
  <Layout>
    <h1>Hello World!</h1>
  </Layout>
)

export default Page
