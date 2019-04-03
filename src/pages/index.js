import React from 'react'
import Layout from '../components/layout'

class Index extends React.Component {
  render() {


    return (
      <Layout>
        <div className="container">
          <section className="grid" id="hero">
            <div className="column-xs-12">
              <h1 className="main-heading">I'm Donovan Andrews, a web developer based in Ann Arbor.</h1>
            </div>
          </section>

          <section className="grid" id="about">
            <div className="column-xs-12">
              <h2>“I believe, that the free, exploring mind of the individual human is the most valuable thing in the world."-John Stienbeck</h2>
            </div>
            <div className="column-xs-12 column-md-3">
              <h3>About Me</h3>
            </div>
            <div className="column-xs-12 column-md-9">
              <p>I enjoy building user interfaces , web apps, and design. In addition to the technologies I know, I'm constantly learning new things everyday about development through meet-ups, online courses, and workshops. I have passion for self-learning and strive to challenge myself to become better at what I do.</p>
              <p>When I'm not coding, you can often find me spending my free time journaling, reading, or playing video games.</p>
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

export default Index

