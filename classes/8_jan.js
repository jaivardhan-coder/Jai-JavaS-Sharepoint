// // conditional statement
// //1. if else
// //2. if else if else
// //multiple if else
// //nested if else(chaining)

// // let age=15
// // if(age>18){//if we put ! in (!(age>18)) it make whole statement reverse means ture is false and false is true
// //     console.log("eligible for voting")
// // }
// // else{
// //     console.log('not eligible')
// // }



// //write a progeram to cheeak the divisibility of 4 and 5
// //write a prog to cheack the number id odd or even 
// //W.A.P to find the last digit of number ex.4545454

// let num=20
// if(num%4==0 && num%5==0){
//     console.log("yes it is divisible")
// }
// else{
//     console.log("not divisible")
// }

// let num2=34
// if(num2%2==0){
//     console.log(` ${num2} It is even number`)
// }
// else{
//     console.log(` ${num2} Odd number`)
// }

// console.log(454545454%100)// third question - jitna zero lgaenge utna  last tk ki value nikalega


// //multiple if
// let x=120
// if(x==120){
//     console.log("yes 1")
// }
// if(x==120){
//     console.log("yes 2")
// }
// if(x==120){
//     console.log("yes 3")
// }
// if(x==120){
//     console.log("yes 4")
// }
// if(x==120){
//     console.log("yes 5")
// }
// if(x==120){
//     console.log("yes 6")
// }

// // nested if else
// let n=34
// if(n>30){
//     console.log("hello")
//     let x2=50
//     if(x2>60){
//         console.log("by")
//     }else{
//         console.log("not by")
//     }
// }else{
//     console.log("not hello")
// }

// write a program to convert celcius to fehr

// let cel=34
// let feh=(cel*9/5+32)
// console.log(feh ,"f")//to print number and integer in same  line use comma(,) or + sign

// //WAP to fing middle number of 3 numbers

let num1=101
let num2=80
let num3=300
if( (num1>num2&&num1<num3) || (num1 < num2 && num1> num3)){
    console.log(num1);
}
else if((num2 > num3 && num2 < num1 )|| (num2< num3 && num2> num1)){
    console.log(num1)
}
else{
    console.log(num3)
}


