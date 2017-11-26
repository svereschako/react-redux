import { createSelector } from 'reselect';

const getItems = (state) => state.items;
export const getItemsState = createSelector(
  [ getItems ],
  (items) => items
)