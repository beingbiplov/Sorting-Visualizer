import React from 'react'
import './styles/Sidebar.css'

const DisabledSideBar = () =>{
	return(
		<div className='sidebar'>
			<button disabled className='sidebar_items'>New Array</button>
			<button disabled  className='sidebar_items'>Bubble Sort</button>
			<button disabled className='sidebar_items'>Selection Sort</button>
			<button disabled className='sidebar_items'>Insertion Sort</button>
			<button disabled className='sidebar_items'>Quick Sort</button>
			<br />
			<button onClick={() => window.location.reload(false)} className='sidebar_items reset'>Reset</button>

		</div>
	)
	
}
export default DisabledSideBar