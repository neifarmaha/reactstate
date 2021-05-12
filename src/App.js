 import React, { Component } from 'react'
 import "../src/App.css"
 
 export class App extends Component {
    state = {
     Person:
     { 
       img:"https://koezionjump.fr/wp-content/uploads/2019/10/avatar-femme-1-300x300.png",
       Name:"Maha",
       Bio :"Engineer",
       Profession:"Web developper",
     },
     isShow : false,
      memory:null,
      count:0,
   }
   toggle = () => {
    this.setState({isShow:!this.state.isShow})
  }
    componentDidMount(){
        console.log("componentDidMount()")
       this.setState({ memory: setInterval(() => {
       this.setState({ count: this.state.count+1 });
     }, 1000) });}
 
   render() {
     return (
       <div>
         <button onClick={this.toggle}>{this.state.isShow ? "Hide" : "Show"}</button> <br/>
         
        {
          this.state.isShow === true ?  
          <p className ="profile">
            <h1>{this.state.count}</h1>
            <img src={this.state.Person.img} alt="" /> <br/>
            {this.state.Person.Name} <br/>
            {this.state.Person.Bio} <br/> 
            {this.state.Person.Profession}
          </p> : null
          
        }
       </div>
     )
      
   }
 }

 export default App
 