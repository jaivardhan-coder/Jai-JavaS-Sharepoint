let array=["jai","Aman","yash","ankit"]
let val=array[0];
let last_name= array.length-1;
array[0]=array[last_name];
array[last_name]=val;
console.log(array);