import React from "react"


class Product extends React.Component {



  render() {
    return (

      <div className="Product">
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt="product"/>
        <div className="information">
          <p>&#9733; {this.props.type}</p>
          <p>&#9733; {this.props.substance}</p>
          <p>&#9733; {this.props.size}</p>
          <p>&#9733; {this.props.numberInPack}</p>
        </div>
        <div className="buy">
          <h3>{this.props.price} kr</h3>
          <button>KÖP</button>
          <p>{this.props.delivery}</p>
        </div>
        <div className="slideUp">
          <p>{this.props.description}</p>
        </div>
      </div>


    )
  }

}

export default Product
