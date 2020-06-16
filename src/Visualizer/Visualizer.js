import React, { useState, useEffect } from 'react'
import '../styles/Visualizer.css'
import Sidebar from '../Sidebar'
import DisabledSideBar from '../DisabledSideBar'
import {getBubbleSort} from '../Algorithms/BubbleSort'


const Visualizer = () =>{
	const [array, setArray] = useState([])
	const [isSorting, setSorting] = useState(false)

	useEffect(() =>{
		resetArray()
	}, [])

	const resetArray = () =>{
		let array =[]
		for(let i=0; i<145; i++){
			array.push(randomInt(5,380))
		}
		setArray(array)
		setSorting(false)
	}

	const randomInt = (min, max) =>{
		return Math.floor(Math.random() * (max-min+1) + min)
	}

	const bubbleSort = () =>{
		//setSorting(true)
		const [sortedArray, animations] = getBubbleSort(array)
		for (let i=0; i<animations.length; i++){
			
			const changeColor = i % 4 === 0 || i % 4 === 1
			const barsClass = document.getElementsByClassName('bar')

			if (changeColor){
				const barColor = (i % 4 === 0 )? 'red' : 'turquoise'
				const [barOneIdx, barTwoIdx] = animations[i]
				const barOneStyle = barsClass[barOneIdx].style
				const barTwoStyle = barsClass[barTwoIdx].style
				setTimeout(() =>{
					barOneStyle.backgroundColor = barColor
					barTwoStyle.backgroundColor = barColor
				}, i * 7)
			}
			else{
				const [barIdx, newHeight] = animations[i]
				if (barIdx === -1){
					continue
				}
				const barStyle = barsClass[barIdx].style
				setTimeout(() => {
					barStyle.height = `${newHeight}px`

				}, i*7)
					
			}

			//to disable sidebar when sorting 
			// if (i === animations.length-1){
			// 	setSorting(false)
			// }
			
		}
		

	}

	const getSideBar = () =>{
		let sidebar = ''
		if (isSorting){
			sidebar = <DisabledSideBar 
							resetArray = {resetArray}
						/>
		}
		else{
			sidebar = <Sidebar 
							resetArray = {resetArray}
							bubbleSort = {bubbleSort}
						/>
		}
		return sidebar
	}

	return(
		<>
		
		{getSideBar()}
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