import React, {Component} from "react";
import '../static/css/Navbar.css';
import '../static/css/Home.css';
import Navbar from './Navbar';

class Home extends Component {

  render(){
    return(
      <div className='bg1'>
        <Navbar />
        <div className='container'>
          <div className='welcome fade_in'>
            <p data-aos='slide-down' data-aos-delay='300'>Hi, my name is</p>
            <h1 data-aos='slide-right' data-aos-delay='600'>Rafael Wanner.</h1>
            <h1 data-aos='slide-up' data-aos-delay='900' className='subheading'>Welcome to my personal page.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
