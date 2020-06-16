import React from 'react'
import './styles/Sidebar.css'

const DisabledSideBar = (props) =>{
	return(
		<div className='sidebar'>
			<button onClick={props.resetArray} className='sidebar_items'>New Array</button>
			<button disabled onClick={props.resetArray} className='sidebar_items'>Bubble Sort</button>
		</div>
	)
	
}
export default DisabledSideBar