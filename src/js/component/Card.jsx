import React from 'react'

const Card = (props) => {
  const { image, title, description } = props.cards;


  return (
    <div className="container card-group ">
      <div className=" row card-group col-l-3 col-m-6 col-s-12">
        <div className=" col card">
          <img src={image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-primary btn-lg " type="button">
              Find out more!
            </button>            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card;