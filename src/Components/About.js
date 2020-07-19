import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../static/css/Second.css';
import '../static/css/About.css';
import markdown from '../Data/about.md'

class About extends React.Component {

  constructor(){
    super();
    this.state = {about: null}
    }

  componentWillMount(){
    fetch(markdown).then((response) => response.text()).then((text) => {
      this.setState({ about: text})
    })
  }
  render(){
    return(
      <div className='bg2' id='about'>
        <h1 className='sectionTitle'>About</h1>
          <div className='container'>
            <div className='about'>
              <ReactMarkdown source={this.state.about} sourcePos={true} />
              <img src={require('../static/images/background/me.jpeg')} alt='' />
            </div>
          </div>
      </div>

    )
  }
}

export default About;
