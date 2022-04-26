import React, { Component } from 'react'
import ProductList from './ProductList'

export class Main extends Component {
  render() {
    return (
      <div>
          <h1>Futura web - Exploding Cakes!!</h1>
          <p>Esto es el main</p>
          <ProductList/>
      </div>
    )
  }
}

export default Main