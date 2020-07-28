import React from 'react';
import '../static/css/Second.css';
import '../static/css/About.css';
import List from './List';
import about from '../Data/about.js'

class About extends React.Component {

  constructor(){
    super();
    this.state = {
      data: about
    }
  }

  render(){
    const skills = this.state.data.skills.map(skill => <List key={skill.id} content={skill} />)
    return(
      <div className='bg2' id='about'>
        <h1 className='sectionTitle'>About</h1>
          <div className='container'>
            <div className='about'>
              <div>
                <p className='intro'>{this.state.data.about}</p>
                <h3 className='sub_head'>Skills</h3>
                  <div className='skills'>
                    {skills}
                  </div>
              </div>
              <img src={require('../static/images/background/me.jpeg')} alt='' />
            </div>
          </div>
      </div>

    )
  }
}

export default About;
