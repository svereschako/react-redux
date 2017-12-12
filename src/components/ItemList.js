import React from 'react';
import ReactDOM from 'react-dom';
import VisibleItemContent from '../containers/VisibleItemContent';
function ItemList(props) {
               
  function drawItem () {   
    document.querySelector('.fixed-overlay').style.display = 'block'; 
  }         
          
  const listItems = props.items.map((item) =>
    <Item key={item.id} title={item.title} onClick={function(){drawItem();props.onClick(item.id);}} />
  );
        
  return (
    <ul>
      {listItems}
    </ul>
  );
        
}
      
function Item(props){
  return <li onClick={props.onClick}>{props.title}</li>;
}    


export default ItemList;