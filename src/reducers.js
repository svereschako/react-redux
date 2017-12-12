import {SHOW_GROUP, SHOW_ITEM, showGroup, showItem} from './actions';

var storage = sessionStorage;
var groupId = storage.getItem('groupId');
const initGrId = 'd3956052-8110-11e7-bb31-be2e44b06b34';
const initSt = {
	'groups': request('https://webilesoft-backend.herokuapp.com/groups').groups,
	'items': request('https://webilesoft-backend.herokuapp.com/groups/items/' + initGrId).items,
	'item': {title:'',subtitle:'',description:''}
};
if(groupId)
	initSt.items = request('https://webilesoft-backend.herokuapp.com/groups/items/' + groupId).items;
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
function commonSt(state=initSt, action){
	switch(action.type){
		case SHOW_GROUP:{			
			return Object.assign({},state,{'items':request('https://webilesoft-backend.herokuapp.com/groups/items/' + action.id).items});
		}
		case SHOW_ITEM:{			
			return Object.assign({},state,{'item':request('https://webilesoft-backend.herokuapp.com/items/' + action.id).item});
		}					
		default:
			return state;
	}

}
export {commonSt, storage};
