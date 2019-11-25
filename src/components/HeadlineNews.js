import React from 'react'

export default function HeadlineNews(props) {
    return (

        <div className="card">
            <a className="article-title" href={props.article.url}>
                <h2>{props.article.title}</h2>
            </a>
            <p className="author">Author by {props.article.author}</p>
            <p>{props.article.description}</p>
        </div>
    )
}
