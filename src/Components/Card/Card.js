import React from 'react';
import './Card.css'

const Card = (props) => {


  return(
    <div className="main-card-div">
      <div data-ref="movie-image" className="card-image-div">
        <img src={props.image} alt="" className="card-image"/>
        <div data-ref="movie-name">
          <p className="card-movie-name"> {props.title}</p>
        </div>
      </div>
    </div>
  )


}

export default Card
