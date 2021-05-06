/* Core */
import React from 'react'

/* Components */
import { Article } from '../article'

/* DataBase */
//import data from './data.json'
import data from './source.json'

/* Styles */
import './styles.scss'

export const News = () => {
	const articleJSX = data.map( ({ ...props }, index) => {
		return <Article {...props} key={index} />
	})

	return (
			<section className="news">
				{articleJSX}
			</section>
	)
}

