import React from 'react'

import './styles.scss'

export const LikesCounter = (props) =>  {
	const { Likes } = props;

	return (
 			<span className="likesCounter">{ Likes }</span>
	)
}

