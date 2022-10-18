//const regexp = new RegExp('template', 'flags)

let str = "     123. Hello World \n";
let str1 = "My number: +1 (123) 123-45-67";
let str2 = "My number: +1 (123) 123-45-67; my room:";


//.match(regexp)///////////////////

///.match(regexp)

//const regexp new RegExp('l', 'gi')

let regexp = /"World"/gi;
let result = str.match(regexp) || [];

//console.log(result.length);
//console.log(result);

// .replace()//////////////////////////////
// $&` $`

// \d \w \s
// \D \W \S
// ^,  $

console.log(str.replace(/L/gi, '$&')); ////         123. Hello World 

console.log(str.replace(/\D/gi, "")); ///123

console.log(str1.replace(/[a-z]/gi, "#")); /// ## ######: +1 (123) 123-45-67


console.log(str1.replace(/[0-9]/gi, "#")); ///  My number: +# (###) ###-##-##
      
console.log(str1.replace(/\d+/gi, "#")); ///  My number: +# (#) #-#-#

console.log(str2.replace(/My/gi, "#")); ///  # number: +1 (123) 123-45-67; # room:


