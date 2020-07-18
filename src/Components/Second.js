import React, {Component} from "react";
import '../static/css/Second.css';
import Project from './Project'
import projects from '../Data/projects.js';



class Second extends Component {
  constructor(){
    super();
    this.state = {
      data: projects
    }
  }
  render(){
    const projectCards = this.state.data.map(project => <Project key={project.id} content={project} />)
    return(
      <div className='bg2' id='projects'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='container'>
        {projectCards}
        </div>
      </div>
    );
  }
}

export default Second;
