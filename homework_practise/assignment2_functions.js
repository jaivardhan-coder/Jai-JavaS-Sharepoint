// ---------------------------------------1-------------------------------------------------------------
// let person_name=prompt('Welcome! please Enter Your name')
// let menu=prompt('Choose the food Items \n1: Burger = 150rs \n2: Pizza = 300rs \n3: Chowmin = 120rs \n4: Roll = 50rs')
// let feedback=prompt('ENTER \n1:To feedback for our food \n2: To exit')
// let tip=parseFloat(prompt('ENTER \n1:Enter the tip if you want \n2: exit'))
// function food(a){
//     if(a==1){
//         let val=("Burger = 150rs")
//         return val;
//     }if(a==2){
//         let val=("pizza = 150rs")
//         return val;
//     }if(a==3){
//         let val=("chowmin = 150rs")
//         return val;
//     }if(a==4){
//         let val=("Roll = 150rs")
//         return val;
//     }else{
//         let val=("Invalid Food Item You Select")
//         return val;
//     }

// }
// function feed(f){
//     if(f==1){
//         let Fb=prompt('Enter you feed back here')
//         return Fb;
//     }else{
//         let Fb=('No user Feedback')
//         return Fb;
//     }
// }
// function tip2(t){
//     if(t==1){
//         let t1=prompt('Enter You Tip Amount')
//         return t1;
//     }else{
//         let t1=(0)
//         return t1;
//     }

// }


// let price=food(menu)
// let feedback1=feed(feedback)
// let tip1=tip2(tip)
// document.write(`<h1>Hello ${person_name}</h1>`)
// document.write(`<h1>Total Price And Item : ${price}</h1>`)
// document.write(`<h1>Feedback From You : ${feedback1}</h1>`)
// document.write(`<h1> Tip : ${tip1}</h1>`)



// ----------------------------------------------2-----------------------------------------------------------
// let input=prompt('Enter the \n1: For add(+) \n2: For Subtract(-) \n3: For divide(/) \n4: For Multiply (*) ')
// let n1=parseFloat(prompt('Enter number 1'))
// let n2=parseFloat(prompt('Enter number 2'))
// let add=(n1,n2)=>{ return n1+n2}
// let sub=(n1,n2)=>{return n1-n2}
// let multi=(n1,n2)=>{return n1*n2}
// let div=(n1,n2)=>{return n1/n2}
// switch(input){
//     case "1":
        
//         document.write(`${add(n1,n2)}`)
//         break;
//     case "2":
        
//         document.write(`${sub(n1,n2)}`)
//         break;
//     case "3":
        
//             document.write(`${div(n1,n2)}`)
//             break;
//     case "4":``
        
//             document.write(`${multi(n1,n2)}`)
//                 break;
// }

// ---------------------------------------------------3---------------------------------------------------------------

// let weight=parseFloat(prompt('Enter Your Weight Here in KG'))
// let height=parseFloat(prompt('Enter Your Height Here in Meters'))
// let BMI=weight/(height*2)
// let BMI1=final(BMI)
// function final(BMI){
//     if(BMI<=18.5){
//         let W=('UnderWeight')
//         return W;
//     }else if(BMI>=18.6 && BMI<=24.9){
//         let W=('Normal Weight')
//         return W;
//     }else if(BMI>=25 && BMI<=29.9){
//         let W=('Over Weight')
//         return W;
//     }else if(BMI>=30){
//         let W=('Obese')
//         return W;

// }
// }
//     if(height>=0){
//         document.write(`${BMI1}`)
//     }else{
//         document.write(`Ivalid Height`)
//     }


// -----------------------------------------------------------------------4------------------------------------------------------------
// let Cust_type=prompt('Enter The Type of You \n1: Regular \n2: Gold \n3: Platinum')
// let Cust_val=prompt('Enter Amount You spend')
// Discount(Cust_type)

// function Discount(a){
// if(a==1){
//     if(Cust_val<500){
//         let dis= (Cust_val*5)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }else {
//         let dis= (Cust_val*10)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }
// } 
// if(a==2){
//     if(Cust_val<500){
//         let dis= (Cust_val*10)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }else {
//         let dis= (Cust_val*15)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }
// }
// if(a==3){
//     if(Cust_val<500){
//         let dis= (Cust_val*15)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }else {
//         let dis= (Cust_val*20)/100
//         document.write(` Your Discount on Price You Spend is : ${dis}`)
//     }
// }
// }



// ------------------------------------------------------------5--------------------------------------------------------------------------------------------
// let marks=parseFloat(prompt('Enter your marks'))
// let grade=(marks)=>{  
//     if(marks>=90&&marks<=100){
//         return "A+";
//     } else if(marks>=80 && marks<=89){
//         return "A";
//     } else if(marks>=70 && marks<=79){
//         return "B";
//     } else if(marks>=60 && marks<=69){
//         return "C";
//     } else if(marks>=50 && marks<=59){
//         return "D";
//     } else if(marks>=0 && marks<=49){
//         return "F";
//     }else{
//         return "Invalid Marks"
//     }

//   }
//   document.write( `Grade according to your marks is: `)
//   document.write( grade(marks))


// -----------------------------------------------------------6-------------------------------------------
// let n1="12A"
// let n2="14B"
// document.write(`<h1> Before Swapping Value : ${n1} ${n2}</h1>`)
//   const swap = (n1,n2)=>{
// let temp = n1;
// n1 = n2;
// n2 = temp;
// document.write(` <h1>After Swapping Value : ${n1} ${n2}</h1>`)
//   }
//   swap(n1,n2);


// --------------------------------------------------------------------------7-----------------------------------------------------
let user_name=prompt('Enter Your Name')
let user_mobile=prompt('Enter Your Mobile Number')
let user_Age=prompt('Enter Your Age')
let user_address=prompt('Enter Your address')
let user_room=prompt('Enter Your Require rooms \n1: Starndard \n2: Deluxe \n3: Suite')
let user_days=parseFloat(prompt('Enter Your Days You Want To Stay'))
let amount= (Days,room)=>{ if(room==1){ 
    let val=Days*100*90
    return val;
} else if(room==2){
    let val=Days*200*90
    return val;
    
}else if(room==3){
    let val=Days*300*90
    return val;
}else{
    let val="Invalid"
    return val;
}

}
document.write(`<h1> Customer Name: ${user_name}</h2>`)
document.write(`<h1> Customer Address: ${user_address}</h1>`)
document.write(`<h1> Customer Age: ${user_Age}</h1>`)
document.write(`<h1> Customer Mobile Number: ${user_mobile}</h1>`)
document.write(`<h1>Your Total Ampunt Will be :</h1>`)
document.write(`<h1>${amount(user_days,user_room)} Rs</h1>`)