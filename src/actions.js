export const SHOW_GROUP = "SHOW_GROUP";
export const SHOW_ITEM = "SHOW_ITEM";

export function showGroup (id){
	return {type: SHOW_GROUP, id: id}
}
export function showItem (id){
	return {type: SHOW_ITEM, id: id}
}