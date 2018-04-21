
var word ={

	reverse:function(word){
var x = word;
var letters ="";

for(var i=0;i<x.length;i++){
	var y = x.length;

	letters += (x[(y-1)-i]);
}
return(letters)
},




countVowels:function(word){

var vo =["a","e","i","o","u"];
var x =word.toLowerCase();
var vowels=0;

for(var i=0;i<x.length;i++){
	

	for(var p=0;p<vo.length;p++){
	if(x[i] === vo[p]){
		vowels ++;
	}
	}



}

return(vowels)
},

	countConsonant:function(word){
		var vo =["a","e","i","o","u"];
var x =word.toLowerCase();
var consonants=0;
var times=0;

for(var i=0;i<x.length;i++){
	
times=0

	for(var p=0;p<vo.length;p++){
	if((x[i] !== vo[p])){
		times ++;
		if (times === 5){
			if(x[i] !== " "){
				
			
			consonants ++
		}
		}
	}
	}


}
return(consonants)
},


// TO use: two inputs are needed (1) a word or sentence  (2) how you want the commas

// if you want the commas after each letter then you type letter, if you want commas after each word then you type word
split:function(word,type){
	var x = word
	var letters=""

	for(var i=0;i<x.length;i++){
		if(type == "letters"){
			letters += x[i]+","
		}
		else if(type == "words"){
			if (x[i]== " "){
			
				letters += ",";
			}
			else{
				letters +=x[i]
			}
		}
	}
	return letters;

}
}


module.exports=word;