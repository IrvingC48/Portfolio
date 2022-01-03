import React from 'react'
import './about.scss';

const AboutMe = () => {
  return (
    <div className="container-about is-grid cols2">
      <div className="column">
        <span className="is-about-g fs-7">about</span>
        <span className="is-about-b fs-12">me.</span>
        <p className="is-flex flex-d-c is-about-b text-block">
          <span>I´m a developer full stack web jr focused in techs such as JavaScript, React, Node, MongoDB and Python.</span>
          <span>I have worked in the financial industry for more than five years, in the Business Intelligence segment, developing data analysis for companies such as Evo Payments and Citibanamex.</span>
          <span>I consider myself very skilled at understanding the business, and with more affinity by the Back-end side.</span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe
