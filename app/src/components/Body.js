import React from 'react';
import BodyChild from "./BodyChild"
var wordFun = require("./methods/wordMethods")

export default class Header extends React.Component{
 
    render()
    {
         var t =this.props.words

            return(  
            
            <div>                  
                <h2> word in reverse : {wordFun.reverse(t)} </h2>

                <BodyChild word={this.props.words} />
   
        
               
            </div>  

           
    
             )
    }
}