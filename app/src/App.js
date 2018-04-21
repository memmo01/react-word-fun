import React from 'react';
import './App.css';
import Body from "./components/Body"
import Nav from "./components/Nav"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
     word:"type in a word or phrase"
    }


      this.changeTitle = this.changeTitle.bind(this)
  }

 


  changeTitle(title){
    this.setState({word:title});

  }
 



  render(){
    return(
          <div>

              <Nav word={this.state.word} changeTitle={this.changeTitle}/>
      
              <div className="row">
              
                  <div className="col">
                  
                  </div>
                  
                  <div className="col-lg-6 bodyOutput">
                      
                    <h2> {this.state.word} </h2>
                      
                      <Body words={this.state.word}/>
                      
                  </div>              
                  
                  <div className="col">
                  </div>

              </div>
          </div>

          ) 
    
  }
}


export default App;
