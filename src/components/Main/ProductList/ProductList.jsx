import React, { Component } from 'react'
import ProductItem from './ProductItem'
import tasksToDo from './tasks.json'
//import axios from 'axios';

export class ProductList extends Component {
constructor(props) {
  super(props)

  this.state = {
     tasks: tasksToDo,  //[] de cakes de la "bbdd"
     lastTask:{},
     sendTask:{},
     value: ''
  }
}

addTask = (event) =>{
   //const price = prompt("Introduce precio")
   //const name = prompt("introduce tipo de tarta")
   //alert(`has añadido:${name} ${price}€ `)
  event.preventDefault();
  
  const tarea = event.target.newTask.value
//   console.log(tarea.length,"tarea lengthhh")
// if(tarea >= 6){
  // const inputs = document.querySelectorAll('#newTask');
  //   inputs.forEach(input => {
  //     input.value = '';
  //   });


  const newTask = {tarea};
  
  //añadir al estado lastCake el último Cake
  this.setState({lastTask: newTask})

  //añadir al estado cakes el nuevo cake
   this.setState({tasks:[newTask,...this.state.tasks]})
   event.target.newTask.value=''
   this.setState({value: ''});
   //setTimeout(() => console.log("Terminado"), 5000);
   setTimeout(() => {
    console.log('Hello, World!')
    this.setState({lastTask: {}})
  }, 5000);
}
// } else {
//   console.log("debes introducir una tarea de más de 6 digitos");
// }
// }

paintTasks= () => this.state.tasks.map((task,i)=><ProductItem data={task} key={i} remove={()=>this.removeTask(i)}/>)

handleChange(event) {
  this.setState({value: event.target.value});
}

removeTasks = () =>  this.setState({tasks:[]})

resetTasks = () =>  this.setState({tasks:tasksToDo})

removeTask = (i) => {
 const remainingTasks = this.state.tasks.filter((cake,j)=> i!==j)
this.setState({tasks:remainingTasks})
}

  render() {
    //let cakes = this.state.cakes;
    let {tarea} = this.state.lastTask;
    return (
      <div>

          <h1>My to do List</h1>
          <form onSubmit={this.addTask}>
            <label htmlFor="newTask">Nueva tarea:</label><br/>
            <input type="text" id="newTask" name="newTask" onChange={this.handleChange.bind(this)}/>
            {this.state.value? <input type="submit" value='Add task' /> : ''}
          </form>
          {/* value="Añadir tarea" */}

          {this.paintTasks()}

          <button onClick={this.removeTasks}>Borra las tareas</button>
          <button onClick={this.resetTasks}>Recarga tareas</button>
          
          {tarea?
          <p>Última tarea añadida: {tarea}</p>
           :""
          }
          
      </div>
    )
  }
}

export default ProductList