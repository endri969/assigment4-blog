import React, { useEffect, useState } from 'react';
import HeadlineNews from './HeadlineNews';
import { Link } from 'react-router-dom';
import Blog from './Blog';
export default function Main() {
    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState({
        articles: []
    });

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+process.env.REACT_APP_NEWS_API_KEY)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setNews({ articles: data.articles });
            })
            .catch(err => {
                setErrors(true);
            });
          }, 5000);
          return () => clearInterval(interval);
        
    }, []);
    return (

        <div>
            <div className="row">
                <div className="leftcolumn">
                    {
                        news.articles.slice(0,3).map((i,k)=> <Blog blog={i} key={k}/>)
                    }
                </div>
                <div className="rightcolumn">
                    {
                        news.articles.slice(0, 5).map((item, key) => <HeadlineNews article={item} key={key} />)
                    }
                </div>
            </div>
        </div>
    )
}

