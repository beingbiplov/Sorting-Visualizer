import React from 'react'
import './styles/Sidebar.css'

const Sidebar = (props) =>{
	return(
		<div className='sidebar'>
			<h4 onClick={props.resetArray} className='sidebar_items'>New Array</h4>
			<h4 className='sidebar_items'>Bubble Sort</h4>
		</div>
	)
	
}
export default Sidebar