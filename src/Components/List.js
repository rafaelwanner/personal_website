import React from 'react';

function List(props) {

  const skills = props.content.data;
  const items = [];

  for (const [index, value] of skills.entries()){
    items.push(<li key={index}>{value}</li>)
  }

  return(
    <div>
      <h4>{props.content.type}</h4>
      <ul>
        {items}
      </ul>
    </div>
  )




};

export default List;
