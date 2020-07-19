import React, {useEffect} from 'react';
import '../static/css/Project.css';
import 'aos/dist/aos.css';
import Aos from 'aos';


function Project(props) {

    if (props.content.id === 1){ var img = require('../static/images/projects/covid.png') } //find better solution for that
    else if (props.content.id === 2) { img = require('../static/images/projects/snake.png') }; //find better solution for that

    if(props.content.id % 2 === 0){
      var animation = 'fade-right';
    }
    else{
      animation = 'fade-left';
    }

    useEffect(() => {
      Aos.init({ duration: 2000,
                 offset: 400,
                 once: 'true'});
    }, []);


    return(
      <main className='project' data-aos={animation}>
        <img src={img} alt="" data-aos='flip-up'/>
        <div>
          <h3>{props.content.title}</h3>
          <p>{props.content.description}</p>
          <a href={props.content.link} className='btn'>Repository</a>
        </div>
      </main>
    )


};

export default Project;
