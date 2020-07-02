import React from 'react'
import './styles/Sidebar.css'
import { Button, Modal } from 'react-bootstrap'

function BubbleSortModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bubble Sort
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Bubble sort is a simple comparison-based sorting algorithm 
          that compares adjacent elements and swaps 
          them if they are in the wrong order.
        </p>
        <p>
          Bubble sort is reasonable for sorting small-sized arrays
          and is not suitable for large data sets.
        </p>
        <h4> Time Complexities: </h4>
        <ul>  
          <li>Worst Case Complexity: O(n&sup2;)</li>
          <li>Best Case Complexity: O(n)</li>
          <li>Average Case Complexity: O(n&sup2;)</li>
        </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SelectionSortModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Seelection Sort
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Selection Sort is one of the simplest sorting algorithms
          which selects the smallest element from an array in each iteration
          , and swaps it into sorted position.

        </p>
        <p>
          This algorithm is not suitable for large data sets as its average 
          and worst case complexities are of Ο(n&sup2;),
        </p>
        <h4> Time Complexities: </h4>
        <ul>  
          <li>Worst Case Complexity: O(n&sup2;)</li>
          <li>Best Case Complexity: O(n&sup2;)</li>
          <li>Average Case Complexity: O(n&sup2;)</li>
        </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InsertionSortModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Insertion Sort
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Insertion sort is a sorting algorithm that places an unsorted element at its 
          suitable place in each iteration, similar to the way we sort playing cards in our hands.

        </p>
        <p>
          This algorithm is not suitable for large data sets as its average 
          and worst case complexities are of Ο(n&sup2;),
        </p>
        <h4> Time Complexities: </h4>
        <ul>  
          <li>Worst Case Complexity: O(n&sup2;)</li>
          <li>Best Case Complexity: O(n&sup2;)</li>
          <li>Average Case Complexity: O(n&sup2;)</li>
        </ul>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Sidebar = (props) =>{
	const [BubbleModal, setBubbleModal] = React.useState(false);
  const [SelectionModal, setSelectionModal] = React.useState(false);
  const [InsertionModal, setInsertionModal] = React.useState(false);

	return(
		<div className='sidebar'>
			<button onClick={props.resetArray} className='sidebar_items'>New Array</button> <br />
			<p>
        <button onClick = {props.bubbleSort} className='sidebar_items'>Bubble Sort
        </button>

        <i onClick={() => setBubbleModal(true)} className="fa fa-question-circle" aria-hidden="true"></i>
      </p>
      <p>
        <button onClick = {props.selectionSort} className='sidebar_items'>Selection Sort</button>

        <i onClick={() => setSelectionModal(true)} className="fa fa-question-circle" aria-hidden="true"></i>
      </p>
      <p>
        <button onClick = {props.insertionSort} className='sidebar_items'>Insertion Sort</button>

        <i onClick={() => setInsertionModal(true)} className="fa fa-question-circle" aria-hidden="true"></i>
      </p>
			
			
			

      <BubbleSortModal
        show={BubbleModal}
        onHide={() => setBubbleModal(false)}
      />
      <SelectionSortModal
        show={SelectionModal}
        onHide={() => setSelectionModal(false)}
      />
      <InsertionSortModal
        show={InsertionModal}
        onHide={() => setInsertionModal(false)}
      />
		</div>
	)
	
}
export default Sidebar