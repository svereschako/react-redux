import React from 'react';
import ReactDOM from 'react-dom';
import './react.css';
function request(url){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();

	if (xhr.status != 200) {
	  // обработать ошибку
	  console.log( xhr.status + ': ' + xhr.statusText ); 
	} else {
	  // вывести результат
	   return JSON.parse(xhr.responseText); 	   
	}
}

var groups, items, groupId;
var storage = sessionStorage;
groupId = storage.getItem('groupId');


function startapp(){
	groups = request('https://webilesoft-backend.herokuapp.com/groups').groups;
	if(groupId){
		groups.forEach(function(group,index){
			if(groupId == group.id)
				items = request('https://webilesoft-backend.herokuapp.com/groups/items/' + groups[index].id).items;
		});		
	}else		
		items = request('https://webilesoft-backend.herokuapp.com/groups/items/' + groups[0].id).items;

}

startapp();

	function GroupsList(props) {
        function getItems(id){          
          storage['groupId'] = id;        
          var items = request('https://webilesoft-backend.herokuapp.com/groups/items/' + id).items;
          ReactDOM.render(
            <ListItems itemLst={items} />,
            document.getElementById('items')            
          );          
        }
        const groups = props.groups;        
        const listItems = groups.map((item) =>
          <GroupItem key={item.id} name={item.name} onClick={getItems.bind(null,item.id)} />
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

      function ListItems(props) {
        function getItem(id){          
          var item = request('https://webilesoft-backend.herokuapp.com/items/' + id).item;
          document.querySelector('.fixed-overlay').style.display = 'block';
          ReactDOM.render(
            <ItemContent title={item.title} subtitle={item.subtitle} description={item.description} />,
            document.querySelector('.modal_container')           
          );          
        }
        const itemLst = props.itemLst;
        const listItems = itemLst.map((item) =>
          <ListItem key={item.id} title={item.title} onClick={getItem.bind(null,item.id)} />
          );

        return (
        <ul>
          {listItems}
        </ul>
        );
        
      }
      
      function ListItem(props){
        return <li onClick={props.onClick}>{props.title}</li>;
      }    

      function ItemContent(props){
        return(
          <div>
            <a href='#' class='close' onClick={function(){document.querySelector('.fixed-overlay').style.display = '';}}>✖</a>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <p>{props.description}</p>
          </div>
          );
      }

      ReactDOM.render(
        <GroupsList  groups={groups}/>,
        document.getElementById('groups')
      );
      
      ReactDOM.render(
        <ListItems itemLst={items} />,
        document.getElementById('items')
      );