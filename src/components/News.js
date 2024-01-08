import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {  
    constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1

    }
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=98102d71fe8a4d59b74adc7760bdf61a&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
}


handlePrevClick = async ()=>{
    console.log("previous")
 

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=98102d71fe8a4d59b74adc7760bdf61a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}



handleNextClick = async ()=>{
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else {

    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=98102d71fe8a4d59b74adc7760bdf61a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    })
}
}


  render() {
    return (
      <div className='container my-5 '>
        <h1 className='text-center'> News United -TOP HEADLINES</h1>     
        <div className='row my-5'>
        {this.state.articles.map((element)=>
        {return <div className='col-md-3 py-3 px-3' key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,25):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
  })}
       
        
      </div>

      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
      </div>
      </div>
      
    )
  }
}
