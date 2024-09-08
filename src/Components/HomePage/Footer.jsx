import React from 'react';
import "./footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = function() {
  return (
    <footer className="text-center bg-body-tertiary font-import">

      <div className="container pt-4">

        <section className="mb-4">
          <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a className="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>

      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className="text-body" href="http://localhost:3000/">BikeQuick</a>
      </div>

    </footer>
  );
}

export default Footer;
