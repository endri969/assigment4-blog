import React from 'react'
import {Link} from 'react-router-dom'
export default function Blog(props) {
    const image = props.blog.urlToImage != null ? <img src={props.blog.urlToImage} alt={props.blog.title} /> : "";
    return (
        <div className="card">
            <Link to={{
                pathname:'/blog',
                blog: props.blog
            }} >
                <h2>{props.blog.title}</h2>
            </Link>
            <h5>{props.blog.description}, {props.blog.publishedAt}</h5>

            {image}
        </div>
    )
}
