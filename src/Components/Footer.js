import React from 'react';
import '../static/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';



function Footer() {

  return(
    <div className='footer bg3'>

      <div className='icons'>
        <a href='https://github.com/rafaelwanner'>
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </a>
      </div>
      <p className="copyright">&copy; Rafael Wanner </p>
    </div>

  )

}

export default Footer;
