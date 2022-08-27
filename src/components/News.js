import React, { Component } from "react";
import NewsItem from "./NewsItem";
import loading from "./loading.svg"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

import Search from "./Search";


export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loadingState: false,
      page: 1,
      totalResults: 0,
      color:"yellow"
    }; 
  }
  static defaultProps =
  {
          country:"in",
          pageSize:9,
          category:"general"
  }
static propTypes=
{
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
}
capitalizeFirstLetter=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  componentDidMount() {
    this.setState({
      loadingState:true
    })
    this.fetchData(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e88a79d075d40dda1ca930ff648efec&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
  }
   i=0;
  //  function fetchData is only used to fetch data according to some state variables
  fetchData = async (url) => {
    // this.setState({
    //   url:this.state.url.replace('&page=1',`&page=${this.state.page}`)
    // })
    if(this.i !== this.state.page)
    {
      this.i=this.state.page
      let data = await fetch(url);
      console.log(this.state.page, url);
      let parsedData = await data.json();
      console.log(this.state.page, parsedData);
      this.setState({
        page:this.state.page+1,
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loadingState:false,
      });
      document.title=this.capitalizeFirstLetter(this.props.category)+ " - NewsHamster";
      

    }
   
  };

  // handlePageNav = async (str) => {

  //   if (str === "next") {
  //     // This here is used to cacl the number of contents to be shown at one page
  //     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
  //       this.setState({
  //         loadingState:true
  //       })
  //       document.getElementById("nextBtn").disabled = false;
  //       this.fetchData(
  //         `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e88a79d075d40dda1ca930ff648efec&page=${
  //           this.state.page + 1
  //         }&pageSize=${this.props.pageSize}`
  //       );
  //       this.setState({ page: this.state.page + 1 });
  //     } else {
  //       document.getElementById("nextBtn").disabled = true;
  //     }
  //   } else {
  //     this.setState({
  //       loadingState:true
  //     })
  //     document.getElementById("nextBtn").disabled = false;
  //     this.fetchData(
  //       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e88a79d075d40dda1ca930ff648efec&page=${
  //         this.state.page - 1
  //       }&pageSize=${this.props.pageSize}`
  //     );
  //     this.setState({ page: this.state.page - 1 });
  //   }
  // };




// Fetching news again on scrolling used by infiniteScroll component
  fetchMoreData = async () => {
               
   await this.fetchData(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e88a79d075d40dda1ca930ff648efec&page=${this.state.page}&pageSize=${this.props.pageSize}`)

  };
















  render() {
    return (
      <>
          <Search articles={this.state.articles}/>
        <h2 className="container my-4 text-center">Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        <div className="container my-4">
            {this.state.loadingState && <div className="container d-flex align-items-center justify-content-center"><img src={loading} alt="loading..." className="text-center"></img></div>}
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Loading/>}
        >
          <div className="container">

       
         
          <div className="row my-4">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  {/* Sending props to NewsItem component from here which is News Component */}
                  <NewsItem
                    title={e.title}
                    desc={e.description}
                    urlImg={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                    badge_color={this.props.category==="technology"?"#007DC3":this.props.category==="sports"?"#E94949":this.props.category==="health"?"#e69500":this.props.category==="entertainment"?"#2db353":this.props.category==="science"?"#333333":"#007DC3"}
                  />
                </div>
              );
            })}
          </div>
          
          </div>
   </InfiniteScroll>
        </div>
        
      </>
    );
  }
}
