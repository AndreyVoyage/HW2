//Core
import React, { useState, useContext } from 'react';

//import source 
import source from '../../component/news/source.json'
//Context
//import { Provider, Context } from './context';

// Styles
import './styles.scss'


//export const LikesCounter = (props) => {
export const LikesCounter = () => {

	const LikesCounterJSX = source.map(({ ...props }, index) => {
		function [Counter, setCounter] = useState(0)
		function increment() {
    setCounter((prevCounter) => { // правильное составление счётчикаоснованное на предыдущем сосстоянии , а не на установленном 
      return prevCounter + 1
	 }
		)
		}
	}
	)
	

	return  (
		<>
			 {LikesCounterJSX}
			<span onClick={increment} className="likesCounter">	{Counter}</span>
		</>	
	)
}

