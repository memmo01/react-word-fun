import React from 'react';
var wordFun = require("./methods/wordMethods")


export default class Footer extends React.Component{


 
  
render(){
    var pw = this.props.word
        return(

        <div>
           <h2> number of vowels in word: {wordFun.countVowels(pw)} </h2>
           <h2> number of consonants in word : {wordFun.countConsonant(pw)} </h2>
         </div>
        )
    }
}

