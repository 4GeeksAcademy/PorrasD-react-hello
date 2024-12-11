import React from 'react'

const Card = () => {
  return (
    <div className="container card-group ">
      <div className=" row card-group col-l-3 col-m-6 col-s-12">
        <div className=" col card">
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <button className="btn btn-primary btn-lg " type="button">
              Find out more!
            </button>            </div>
        </div>
        <div className=" col card">
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" type="button">
              Find out more!
            </button>            </div>
        </div>
        <div className=" col card">
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" type="button">
              Find out more!
            </button>            </div>
        </div>
        <div className=" col card">
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary btn-lg" type="button">
              Find out more!
            </button>            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card