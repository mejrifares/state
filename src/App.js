import './App.css';
import Profile from './components/Profile';
import { Button } from 'react-bootstrap'
import './css.css'

// class App (){
// return (
//   <div className="App">
//   
//   </div>
// );
// }
import React, { Component } from 'react'
import Counter from './components/Counter';

class App extends Component {
  profile = {
    name: "Faress",
    lastName: "Mejri",
    bio: "Im Creative Developper",
    profession: "Softwar Engineer",
    picture: "https://www.internships.com/wp-content/uploads/2019/09/software-engineer-600x400.jpg"
  }
  state = {
    isdisplayed: true,
    buttonTest: "hide"

  }



  render() {
    return (
      <div className="App">
        <Button variant="success" onClick={() => {

          this.setState({
            isdisplayed: !this.state.isdisplayed,
            buttonTest: this.state.isdisplayed ? "unhide" : "hide"

          })
          console.log(this.state.isdisplayed)

        }}>{this.state.buttonTest}</Button >{' '}
        {
          this.state.isdisplayed ? <Profile {...this.profile} /> : null
        }
        { 
       this.state.isdisplayed ? <Counter /> : null
        }
      </div>
    )
  }
}


export default App;
