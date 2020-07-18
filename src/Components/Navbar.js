import React, {useEffect} from 'react';
import '../static/css/Navbar.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Navbar() {

  var nav = 'navBar';
  var lastScrollTop = 0;
  const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      if (position > lastScrollTop){
        console.log("down");
        nav = 'navUp';

      }
      else{
        console.log("up");
        nav = 'navBar';
      }
      lastScrollTop = position <= 0 ? 0 : position;
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return(
        <div className={nav} >
          <ul className='navList'>
            <a href="#about" className="button" data-aos='slide-down' data-aos-delay='300'>About</a>
            <a href="#projects" className="button" data-aos='slide-down' data-aos-delay='600'>Projects</a>
            <a href="#contact" className="button" data-aos='slide-down' data-aos-delay='900'>Contact</a>
          </ul>
        </div>
    );

}


export default Navbar;
