import React from "react";

const NewsItem=(props)=>{
  
    let { title, desc, urlImg, newsUrl, author, date, source, badge_color } = props;
    // console.log(badge_color)
    return (
      <div className="card rounded-start border--bottom my-3 border-start mx-4">
        <span className="badge" style={{    position: "absolute"
    ,borderRadius: "0px 0px 10px 0px", backgroundColor:badge_color}}>{source}</span>
        <img
          src={
            urlImg
              ? urlImg
              : "https://previews.123rf.com/images/zerbor/zerbor1503/zerbor150300056/37603324-a-newspaper-with-the-headline-breaking-news.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 70).concat("....") : ""}
          </h5>
          <p className="card-text">
            {desc ? desc.slice(0, 150).concat(".....") : ""}
          </p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toLocaleString("en",{
            weekday: 'short', // long, short, narrow
            day: 'numeric', // numeric, 2-digit
    year: '2-digit', // numeric, 2-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    // second: 'numeric', // numeric, 2-digit
})}</small></p>
          
          <a href={newsUrl} className="btn btn-sml btn-primary" target="blank">
            Read more
          </a>
        </div>
      </div>
    );
  }


export default NewsItem;
