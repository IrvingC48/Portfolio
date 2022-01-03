/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './jumbotron.scss';

const Jumbotron = () => {
  return (
    <div className="container-jumbo is-grid cols2">
      <div className="column">
        <span className="is-primary m-0-10r pb-10r">Portfolio</span>
        <span className="is-primary m-0-10r pb-10r"></span>
        <span className="is-primary m-0-10r w-50 fs-7 f-title">Irving Cisneros</span>
      </div>
      <div className="column pl-5r">
        <div className="is-flex flex-d-c flex-ai-c">
          <span className="is-white mx-2">Developer Full Stack Web js</span>
          <span className="is-white">M E R N</span>
        </div>
        {/* <span className="is-white">Data Scientist</span> */}
      </div>
    </div>
  )
}

export default Jumbotron
