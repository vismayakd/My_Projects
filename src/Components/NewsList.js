import React, {useEffect, useState} from 'react';
import "./NewsList.css";
import axios from "axios";

function NewsList() {

    const [allNews, setAllNews] = useState([]);
    
    // API call to get all the news sorted by date published
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-06-19&to=2024-06-19&sortBy=publishedAt&apiKey=d93f4f6bc5df4abfb8c4e6bd8d7f322a"
        ).then((response) => {
            setAllNews(response.data.articles);
        });
    }, []);
    
    
  return (
    <div className="news_aggregator">
        
        <div  className="news-cat-container">
        {/* To list all the news headlines  with description*/}

            {allNews.map((news) => (
            <div
            key={news.title}
            data-news={news.title}
            className="cat_card"
            >
            <h3 className='news_title'>{news.title}</h3>
            <p className='news_desc'>{news.description}</p>
            </div>
        ))}
        </div>
    </div>
  )
}
export default NewsList;