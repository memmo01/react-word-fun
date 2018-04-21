import React from 'react'

export default class Nav extends React.Component{
    handleChange(e)
  {
    const word = e.target.value;
    this.props.changeTitle(word)
  }
 
render(){
    return(


            
            <nav className="navbar navbar-dark bg-dark">
              <div className="col">
                  <span id="logo">React Fun</span>
                </div>
              <input onChange={this.handleChange.bind(this)} id='phraseInput' placeholder={this.props.word}/>
              <div className="col">
                </div>
            </nav>
        
    )
}
}