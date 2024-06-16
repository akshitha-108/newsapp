import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles :[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7a272a790bc2447eb428a70c68dc83ce&page=1"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
            
        </div>
        <div className='container'>
        <button type="button" class="btn btn-dark">Previous</button>
        <button type="button" class="btn btn-dark">Next</button>
        </div>
       </div>
    )
  }
}

export default News
