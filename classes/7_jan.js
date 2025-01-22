//operator
//arthmetic operator
 //add (+)
  let n1=45
  let n2 = 55
  let res=n1+n2
  document.write(`<h2>addition of ${n1} + ${n2} = ${res} </h2>`)
//   console.log(res) it used to code in terminal output
    
//sub (-)
let n3=95
let n4 = 55
let res2=n3-n4
document.write(`<h2>subtraction of ${n3} - ${n4} = ${res2} </h2>`)

//mul (*)
let n5=95
let n6 = 55
let res3=n5*n6
document.write(`<h2>multiply of ${n5} * ${n6} = ${res3} </h2>`)

//div (/)
let n7=95
let n8 = 55
let res4=n7/n8
document.write(`<h2>divide of ${n7} / ${n8} = ${res4} </h2>`)
//modulus (%)
let n9=95
let n10 = 55
let res5=n9%n10
document.write(`<h2> modulus of ${n9} % ${n10} = ${res5} </h2>`)

//sqare root (**)
let n11=95
document.write(`<h2>suare of ${n11} = ${n11**n11} </h2>`)

//coparation operator
document.write(`<h2 style="color:red;"> 2. coparison operator</h2> `)
let x=50
let y = 60 
let data=x>y
document.write(`<h2> greater than: ${x} > ${y} = ${data} </h2>`)

let x1=50
let y1= 60 
let data2=x1<y1
document.write(`<h2> lesser than: ${x1} < ${y1} = ${data2} </h2>`)


let x2=50
let y2 = 60 
let data3=x2==y2
document.write(`<h2> equal to: ${x2} == ${y2} = ${data3} </h2>`)


let x3=50
let y3 = 60 
let data4=x3!=y3
document.write(`<h2> not equal than: ${x3} != ${y3} = ${data4} </h2>`)


//.post-increment(a++) // pre increment(++a)
//post -decrement(a--) / pre decrement(--a)

//post increment / pre increment

let m=10
let q=m++
document.write(`<h2>post increment(a++) : ${q}</h2>`)//post increment // same put (a--) 

let m1=10
let q1=m1++
document.write(`<h2>pre increment(++a) : ${q1}</h2>`)//pre increment // same put (--a)

///logical operator
//and - all condition should be true
let v1=45
let v2=46
let v3=v1>20 && v2>40
document.write(`<h2>${v1} and ${v2} = ${v3} </h2>`)
//or- if all condition is false but 1 is true is print true, all flase is false , all true is true 
let v4=45
let v5=46
let v6=v4>200 || v5>400 || v5>300
document.write(`<h2>${v4} or ${v5} = ${v6} </h2>`)
// not(!) : reverse the result

let z4=45
let z5=46
let z6=z4<z5 || ! z4>z5 
document.write(`<h2>${z4} not ${z5} = ${z6} </h2>`)

//ternary operator. jese ki question mark ka sign wali condition true hogi ya nhi vhi btata hai (?)
document.write(`<h1>ternary operator</h1> <hr>`)
let marks=55
let result=(marks>45) ? 'pass' : 'fail';
document.write(`<h1>result : ${result}</h1>`)

//unary operator
let v=55
let t=+v
document.write(`<h1>result : ${t}</h1>`)

//assignment opeeraator
let j=90
j=j+10//standard method-- mtlb ki 90 mai 10 add hoga fir 20 bhi hoga
j=j+20
j+=23
j*=2
j/=2
document.write(`<h1>result: ${j}</h1>`)
