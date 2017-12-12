import { createSelector } from 'reselect';
import commonSt from './reducers';

const getItems = (state) => state.items;
export const getItemsState= createSelector(
  [ getItems ],
  (items) => items
);

const getItem = (state) => state.item;
export const getItemState = createSelector(
	[getItem],
	(item) => item
);