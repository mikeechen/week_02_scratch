function alphabetPosition(text) {
  text=text.toLowerCase();
  str='';
  for (let i=0; i<text.length; i++){
  	if (text[i].match(/[a-z]/)){
  		str=str+(text[i].charCodeAt()-96)+' ';
  	}
  }
  return str;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
