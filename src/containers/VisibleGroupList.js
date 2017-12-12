import { connect } from 'react-redux';
import {showGroup} from '../actions';
import GroupList from '../components/GroupList';
import { getItemsState } from '../selectors';

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(showGroup(id))
    }
  }
}
const VisibleGroupList = connect(mapStateToProps, mapDispatchToProps)(GroupList);
export default VisibleGroupList;