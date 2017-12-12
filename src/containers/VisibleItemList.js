import { connect } from 'react-redux';
import { getItemsState } from '../selectors';
import {showItem} from '../actions';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  return {
    items: getItemsState(state)    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(showItem(id))
    }
  }
}
const VisibleItemList = connect(mapStateToProps, mapDispatchToProps)(ItemList);
export default VisibleItemList;