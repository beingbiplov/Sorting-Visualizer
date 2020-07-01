import React, { useState, useEffect } from 'react'
import '../styles/Visualizer.css'
import Sidebar from '../Sidebar'
import DisabledSideBar from '../DisabledSideBar'
import {getBubbleSort} from '../Algorithms/BubbleSort'
import {getSelectionSort} from '../Algorithms/SelectionSort'
import {getInsertionSort} from '../Algorithms/InsertionSort'

const Visualizer = () =>{
	const [array, setArray] = useState([])
	const [isSorting, setSorting ] = useState(false)

	useEffect(() =>{
		resetArray()
	}, [])

	const resetArray = () =>{
		let array =[]
		for(let i=0; i<20; i++){
			array.push(randomInt(5,380))
		}
		setArray(array)
		// for testing small arrays
		//setArray([60,20,50])
		setSorting(false)
	}

	const randomInt = (min, max) =>{
		return Math.floor(Math.random() * (max-min+1) + min)
	}

	const bubbleSort = () =>{
		setSorting(true)
		const [newArray, animations] = getBubbleSort(array)
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
				}, i * 200)
			}
			else{
				const [barIdx, newHeight] = animations[i]
				if (barIdx === -1){
					continue
				}
				const barStyle = barsClass[barIdx].style
				setTimeout(() => {
					barStyle.height = `${newHeight}px`

				},i*200)
					
			}
			//to disable sidebar when sorting. Need better solution fot this!
			setTimeout(()=>{
				setSorting(false)
				setArray(newArray)
			}, animations.length*200)
			
		}

	}

	const selectionSort = () =>{
		setSorting(true)
		const [newArray, animations] = getSelectionSort(array)

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
				}, i * 200)
			}
			else{
				const [barIdx, newHeight] = animations[i]
				if (barIdx === -1){
					continue
				}
				const barStyle = barsClass[barIdx].style
				setTimeout(() => {
					barStyle.height = `${newHeight}px`

				},i*200)
					
			}
			//to disable sidebar when sorting. Need better solution fot this!
			setTimeout(()=>{
				setSorting(false)
				setArray(newArray)
			}, animations.length*200)

		}
	}

	const insertionSort = () =>{
		setSorting(true)
		const [newArray, animations] = getInsertionSort(array)
		
		for (let i=0; i<animations.length; i++){
			const changeColor = animations[i][0]==='comparisionOne' || animations[i][0]==='comparisionTwo' 
			const barsClass = document.getElementsByClassName('bar')


			if (changeColor){
				const barColor = animations[i][0]==='comparisionOne'? 'red' : 'turquoise'
				const [temp, barOneIdx, barTwoIdx] = animations[i]
				const barOneStyle = barsClass[barOneIdx].style
				const barTwoStyle = barsClass[barTwoIdx].style
				setTimeout(() =>{
					barOneStyle.backgroundColor = barColor
					barTwoStyle.backgroundColor = barColor
				}, i * 400)
			}
			else{
				const [temp, barIdx, newHeight] = animations[i]
				
				const barStyle = barsClass[barIdx].style
				setTimeout(() => {
					barStyle.height = `${newHeight}px`

				},i*400)
					
		 	}
			//to disable sidebar when sorting. Need better solution fot this!
			setTimeout(()=>{
				setSorting(false)
				setArray(newArray)
			}, animations.length*2*200)

		 }
	}


	const getSideBar = () =>{
		let sidebar = ''
		if (isSorting){
			sidebar = <DisabledSideBar 
						/>
		}
		else{
			sidebar = <Sidebar 
							resetArray = {resetArray}
							bubbleSort = {bubbleSort}
							selectionSort = {selectionSort}
							insertionSort = {insertionSort}
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