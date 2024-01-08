import React, { Component } from 'react'

export default class Newsitem extends Component {

   
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return <>
      <div className='mx-3'>
        <div className="card" style={{width: "18rem;"}}>
  <img src={!imageUrl?"https://cdn.theathletic.com/app/uploads/2023/12/28221548/GettyImages-1890950104.jpg":imageUrl} className='card-img-top' alt='...'/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    </>
  }
}
