import React from 'react';
import VisibleGroupList from '../containers/VisibleGroupList';
import VisibleItemList from '../containers/VisibleItemList';
import VisibleItemContent from '../containers/VisibleItemContent';

function App(){
	return(
		<div>
			<div className='groups'>
				<VisibleGroupList />
			</div>
			<div className='items'>
				<VisibleItemList />
			</div>
			<div className="fixed-overlay">      
      			<div className="modal">
          			<div className="modal_container">
          				<VisibleItemContent />             
          			</div>
      			</div>
    		</div>
		</div>
		);
}
export default App;