import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

class Index extends React.Component {
  render() {

    const data = this.props.data
    const calc = data.calc.childImageSharp.fluid
    const stc = data.stc.childImageSharp.fluid
    const portfolio = data.portfolio.childImageSharp.fluid
    const hangtime = data.hangtime.childImageSharp.fluid

    const Portfolio = [
      {
        name: 'See The Color',
        subtitle: 'Diversity Consulting Website built using Gatsby.js',
        image: stc,
        color: '#ffd866',
        link: 'https://github.com/DonovanAndrews300/stc'
      }, {
        name: 'Budgeting calculator',
        subtitle: 'Javascript calculator project built in node',
        image:calc ,
        color: '#dae0ef',
        link: 'https://github.com/DonovanAndrews300/BudgetingApp'
      }, {
        name: 'Portfolio',
        subtitle: 'First portfolio built with html/css and bootstrap',
        image:portfolio,
        color: '#acd2ff',
        link: 'https://github.com/DonovanAndrews300/donovan.com'
      },
      {
        name: 'Hangtime',
        subtitle: 'App that gives you a random activity to do with your friends. Built with the MERN stack',
        image:hangtime,
        color: '#acd2ff',
        link: 'https://github.com/DonovanAndrews300/Hangtime'
      },
    ]


    return (
      <Layout>
        <div className="container">
          <section className="grid" id="hero">
            <div className="column-xs-12">
              <h1 className="main-heading">I'm Donovan Andrews, a web developer based in Ann Arbor,MI.</h1>
            </div>
          </section>

          <section className="grid" id="work">
            {Portfolio.map(work => (
              <div className="column-xs-12 column-md-6">
                <a href={work.link} title={work.name} target="_blank" rel="noopener noreferrer">
                  <figure>
                    <Img className="portfolio-img" fluid={work.image} alt={work.name} backgroundColor={work.color} />
                    <figcaption>
                      <h3>{work.name}</h3>
                      <p>{work.subtitle}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </section>

          <section className="grid" id="about">
            <div className="column-xs-12">
              <h2>“I believe, that the free, exploring mind of the individual human is the most valuable thing in the world."-John Stienbeck</h2>
            </div>
            <div className="column-xs-6 column-md-3">
              <h3>About Me</h3>
            </div>
            <div className="column-xs-6 column-md-6">
              <p>I enjoy building user interfaces , web apps, and design. In addition to the technologies I know,
                 I'm constantly learning new things everyday about development through meet-ups, online courses, and workshops. 
                 I have a passion for self-learning and I strive to challenge myself to become better at what I do.
                 When I'm not coding, you can often find me journaling,reading,or playing games.</p>
            </div>
            <div  className="column-xs-6 column-md-3">
            </div>
            <div className="column-xs-12 column-md-3">
              <h3>Tech Stack</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>GraphQl</li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    calc: file(
      relativePath: { regex: "/calc.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          

        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    stc: file(
      relativePath: { regex: "/stc.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    portfolio: file(
      relativePath: { regex: "/portfolio.png/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
  `
export default Index

