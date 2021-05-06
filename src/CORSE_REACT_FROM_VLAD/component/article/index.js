/* Core */
import React from 'react'

/* Components */
import { Tag } from '../../elements/tag'
import { CommentsCounter } from '../../elements/commentscounter'
import { LikesCounter } from '../../elements/likescounter'
import { Accordion } from '../accordion'

/* Styles */
import './styles.scss'

//export const Article = (props) => {
//    const { Title, Text, Dtes } = props;
export const Article = ({ tags, image, title, description, published, comments, Likes  }) => {  // Упростили написание пропсов
//export const Article = ({ ...props  }) =>   
console.log({tags})    
    return (
        <section className="article">
            <header>
                <div className="poster">
                    <img src={image} alt="" />
                </div>
                <Tag tags={tags[0]} />               
            </header>
            <article>
                <h1>{ title }</h1>
                <p>{description }</p>
            </article>
            <footer>
                <span>{ published }</span>
                <div className="controls">
                    <CommentsCounter comments={comments} />
                    <LikesCounter Counter={Likes} />
                </div>
            </footer>
        </section>
    )
}
