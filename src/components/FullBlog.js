import React from 'react'
import { Link } from 'react-router-dom'
export default function FullBlog(props) {
    const image = props.location.blog.urlToImage != null ? <img src={props.location.blog.urlToImage} alt={props.location.blog.title} /> : "";
    return (
        <div className="card">

            <h2>{props.location.blog.title}</h2>

            <h5>{props.location.blog.description}, {props.location.blog.publishedAt}</h5>

            {image}

            <p>{props.location.blog.content}</p>
        </div>
    )
}
