import React, { Component } from 'react'
import './ProductItem.css'

export class ProductItem extends Component {
  //rconst
constructor(props) {
  super(props)

  this.state = {
     company:this.props.data.company || "Cat Cake SA"
  }
}

  render() {
    //destructuring
    const {tarea} = this.props.data
    return (
      <div>
          <h4>{tarea}</h4>
          <button onClick={this.props.remove}>Borrar</button>
      </div>
    )
  }
}

export default ProductItem