import React, { Component } from 'react'
 
export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
        <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://c.ndtvimg.com/2023-03/9n5mam7o_yediyurappa_625x300_30_March_23.jpg?im=FaceCrop,algorithm=dnn,width=650,height=400":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a rel='noreferrer' href={newsUrl} target = "_blank"  className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
