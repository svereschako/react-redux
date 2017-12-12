import { connect } from 'react-redux';
import { getItemState } from '../selectors';
import ItemContent from '../components/ItemContent';

const mapStateToProps = (state) => {
  const item = getItemState(state)	
  return {
    title: item.title,
    subtitle: item.subtitle,
    description: item.description    
  }
}
const VisibleItemContent = connect(mapStateToProps)(ItemContent);
export default VisibleItemContent;