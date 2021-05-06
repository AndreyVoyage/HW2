//Core
import React, { useState, useContext } from 'react';

//import source 
import source from '../../component/news/source.json'
//Context
//import { Provider, Context } from './context';

// Styles
import './styles.scss'


//export const LikesCounter = (props) => {
export const LikesCounter = (props) => {

	  //const LikesCounterJSX = source.map(({...props}), index) =>
	//const lks = source.map(({...props}), index)

 const [Counter, setCounter] = useState(0)

	
	function increment() {
    setCounter((prevCounter) => { // правильное составление счётчикаоснованное на предыдущем сосстоянии , а не на установленном 
      return prevCounter + 1
	 }
		);	
};
	
	//const LKS = { increment } + 1;
	
	//if (setCounter(prevCounter + 1)) ? (setCounter(prevCounter - 1))

	return  (
 		
			<span onClick={increment} className="likesCounter">	{Counter}</span>
			
	)
}


