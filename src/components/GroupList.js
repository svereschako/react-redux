import React from 'react';
import ReactDOM from 'react-dom';
import {storage} from '../reducers';
import ItemList from './ItemList';

function GroupList(props) {          
  function saveId(id){          
    storage['groupId'] = id;  
  }              
  const listItems = props.groups.map((item) =>
    <GroupItem key={item.id} name={item.name} onClick={function(){saveId(item.id);props.onClick(item.id);}} />
  );
        
  return (
    <ul>
      {listItems}
    </ul>
  );  
        
}

function GroupItem(props){
  return <li onClick={props.onClick}>{props.name}</li>;
}   
export default GroupList;