import React from 'react'

import './tag.scss'

export const Tag = ( props ) => {
  const { tags } = props

	return (
			 <div className="tags ">
          <div>
            <span className="tag">{ tags }</span>
          </div>
          <div>
            <span className="tag">{ tags}</span>
          </div>
      </div>
	)
}

