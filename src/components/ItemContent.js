import React from 'react';

function ItemContent(props){
  return(
    <div>
      <a href='#' className='close' onClick={function(){document.querySelector('.fixed-overlay').style.display = '';}}>✖</a>
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.description}</p>
    </div>
  );
}
export default ItemContent;