import React from "react"
import Product from "./product"
// const productsJson = require("./../products.json")


class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    products: []
  }
}

  componentDidMount() {
    fetch("http://localhost:8080/products")
      .then((response) => {
        return response.json()
      }).then((data) => {
        this.setState({
          products: data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Produkter</h1>
        <div className="productsNum">
          <p>Antal produkter {this.state.products.length}</p>
        </div>
        <div className="productContainer">
          {this.state.products.map((product) => {
            return <Product name={product.name.toUpperCase()}
            image={product.image}
            type={product.type}
            substance={product.substance}
            size={product.size}
            numberInPack={product.numberInPack}
            price={product.price}
            delivery={product.deliveryTime}
            description={product.description}/>
          }
          )}
        </div>
      </div>
    )
  }

}

export default App
