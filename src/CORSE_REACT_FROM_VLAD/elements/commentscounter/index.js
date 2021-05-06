import React from 'react'

import './commentscounter.scss'

export const CommentsCounter = (props) =>  {
	const { Comments } = props;

	return (
 			<span className ="commentsCounter">{ Comments }</span>
	)
}
