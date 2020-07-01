import React from 'react'
import './styles/Sidebar.css'

const Sidebar = (props) =>{
	return(
		<div className='sidebar'>
			<button onClick={props.resetArray} className='sidebar_items'>New Array</button>
			<h4 onClick = {props.bubbleSort} className='sidebar_items'>Bubble Sort</h4>
			<h4 onClick = {props.selectionSort} className='sidebar_items'>Selection Sort</h4>
			<h4 onClick = {props.insertionSort} className='sidebar_items'>Insertion Sort</h4>
		</div>
	)
	
}
export default Sidebar