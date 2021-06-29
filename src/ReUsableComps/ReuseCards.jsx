import React from 'react'

const ReuseCards = ({src,key,service,types,style}) => {
    return (
        <div>
            <div className="card" style={style}>
  <img class="card-img-top" src={src} alt="Card image cap"/>
  <div class="card-body">
    <div key={key}>
    <h5 class="card-title">{service}</h5>
    <p class="card-text">{types}</p>
    <a href="#" class="btn btn-primary">view more</a>
    </div>   
  </div>
</div>
        </div>
    )
}

export default ReuseCards
