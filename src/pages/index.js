import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"

import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 20px auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="HeadHeadline">Learn to design and code React apps</h1>
        <p className="HeroText">Complete course about the best tools and design.</p>
        <Link className="HeroLink" to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width='50' alt=""/>
          <img src={require('../images/logo-figma.png')} width='50' alt=""/>
          <img src={require('../images/logo-studio.png')} width='50' alt=""/>
          <img src={require('../images/logo-framer.png')} width='50' alt=""/>
          <img src={require('../images/logo-react.png')} width='50' alt=""/>
          <img src={require('../images/logo-swift.png')} width='50' alt=""/>
        </div>
        <Wave/>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="11 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Sound Design"
          text="11 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>

    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="
        Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне.
        Lorem Ipsum является стандартной  для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал.
      "
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>

  </Layout>
)

export default IndexPage
