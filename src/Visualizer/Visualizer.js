import React, { useState, useEffect } from 'react'
import '../styles/Visualizer.css'
import Sidebar from '../Sidebar'


const Visualizer = () =>{
	const [array, setArray] = useState([])

	useEffect(() =>{
		resetArray()
	}, [])

	const resetArray = () =>{
		let array =[]
		for(let i=0; i<200; i++){
			array.push(randomInt(5,380))
		}
		setArray(array)
	}

	const randomInt = (min, max) =>{
		return Math.floor(Math.random() * (max-min+1) + min)
	}
	return(
		<>
		<Sidebar resetArray = {resetArray} />
		<div className='bars-div'>
			{array.map((value, index) => (
		        <div 
		        	className='bar' 
		        	key={index} 
		        	style={{height: `${value}px`}}>
		        </div>
		  	 ))}
		</div>
		</>
	)
}
export default Visualizer