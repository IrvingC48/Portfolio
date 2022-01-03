import React from 'react'
import './contact.scss';

//Icons
import { BsLinkedin, BsGithub, BsPhone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const index = () => {
  return (
    <div className="container-contact is-grid cols2">
      <div></div>
      <div className="column">
        <span className="contact-me fs-7">Contact Me.</span>
        <div className="w-80 is-grid cols2">
          <div></div>
          <div className="social-media">
            <div className="media">
              <span><a href="https://mx.linkedin.com/in/irving-cisneros-castillo">Irving Cisneros Castillo</a></span>
              <a href="https://mx.linkedin.com/in/irving-cisneros-castillo"><BsLinkedin/></a>
            </div>
            <div className="media">
              <span><a href="https://github.com/IrvingC48">IrvingC48</a></span>
              <a href="https://github.com/IrvingC48"><BsGithub/></a>
            </div>
            <div className="media">
              <span>55-7921-0144</span>
              <BsPhone/>
            </div>
            <div className="media">
              <span>c.ici.3015@hotmail.com</span>
              <MdAlternateEmail/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
