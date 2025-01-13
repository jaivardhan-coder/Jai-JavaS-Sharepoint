// Student Grading System
// let marks=(prompt("Enter Your Marks Out of 100 "))
// if(marks>=90&&marks<=100){
// document.write(`Your Marks is: ${marks} - Grade A`)
// } else if(marks>=80&&marks<=89){
//     document.write(`Your Marks is: ${marks} - Grade B`)
// } else if(marks>=70&&marks<=79){
//     document.write(`Your Marks is: ${marks} - Grade C`)
// } else if(marks>=60&&marks<=69){
//     document.write(`Your Marks is: ${marks} - Grade D`)
// } else if(marks>=50&&marks<=59){
//     document.write(`Your Marks is: ${marks} - Grade E`)
// } else if(marks>=0&&marks<=49){
//     document.write(`Your Marks is: ${marks} - Grade F`)
// } else{
//     document.write(`Invalid Marks`)
// }


//Tax Calculation
// let CarBrand=prompt("Enter the Car Brand Options Are- Mahindra,Audi,Jaguar,Mercedes") 
// let CostPrice=parseFloat(prompt('Enter The price in Lakhs ')) 
 
// if((CarBrand=="Mahindra"|| CarBrand=="mahindra" )&&(CostPrice>=700000 && CostPrice <=1000000)){
//     document.write(`Your Tax Wil be in Mahindra car is:  ${ CostPrice*0.05}`)
// }else if((CarBrand=="Audi"|| CarBrand=="audi")&&(CostPrice>=1000000 && CostPrice<=1500000)){
//     document.write(`Your Tax Wil be in Audi car is: ${CostPrice*10/100}`)
// }else if((CarBrand=="Jaguar"||CarBrand=="jaguar")&&(CostPrice>=1500000 && CostPrice<=2000000)){
//     document.write(`Your Tax Wil be in Jaguar car is: ${CostPrice*25/100}`)
// }else if((CarBrand=="Mercedes"|| CarBrand=="mercedes")&&(CostPrice>=2000000 && CostPrice<=2500000)){
//     document.write(`Your Tax Wil be in Mercedes car is: ${CostPrice*30/100}`)
// }else {
//     document.write("Wrong option OR Wrong Price")
// }

//Finding The middle number
// let num1=prompt("Enter the First number")
// let num2=prompt("Enter the Second number")
// let num3=prompt("Enter the Third number")
// if((num2>num1&&num1>num3)|| num2<num1&&num1<num3){
//     document.write(`Middle number of ${num1}, ${num2}, ${num3} is = ${num1}`)
// }else if((num2 > num3 && num2 < num1 )|| (num2< num3 && num2> num1)){
//     document.write(`Middle number of ${num1}, ${num2}, ${num3} is = ${num2}`)
// } else{
//     document.write(`Middle number of ${num1}, ${num2}, ${num3} is = ${num3}`)
// }

//finding the biggest number
// let num1=parseFloat(prompt("Enter the First number"))
// let num2=parseFloat(prompt("Enter the Second number"))
// let num3=parseFloat(prompt("Enter the Third number"))
// if((num1>=num2)&&(num1>=num3)){
// document.write(`Biggest Number is : ${num1}`)
// } else if((num2>=num1)&&(num2>=num3)){
//     document.write(`Biggest Number is : ${num2}`)
// } else{
//     document.write(`Biggest Number is : ${num3}`)
// }

//5-authentication 
// let username=prompt("Enter the Username")
// let userpassword=prompt("enter the password")
// if(username==("user1")&& userpassword==("pass@123")){
// document.write(`authentication succesful`)
// }else{
//     document.write(`authentication fail`)
// }

// 6-calculate class attendence
// let AttendencePercent=parseInt(prompt("Enter your attendence in Percent ,to cheak if you are Eligible for exam"))
// if(AttendencePercent>=75){
//     document.write(`You are Eligible`)

// }else{
//     document.write(`You are not Eligible`)
// }

// 6.Library Charge Calculation
// let Days=parseInt(prompt("Enter the Number of day you borrow a book"))
//     if(Days>=5&&Days<=1){
//         document.write(`Your total amount to be paid is: ${Days*2}`)
//     } else if(Days>=6&&Days<=10){
//         document.write(`Your total amount to be paid is: ${(Days*2)*3}`)
//     } else if(Days>=11&&Days<=15){
//         document.write(`Your total amount to be paid is: ${((Days*2)*3)*4}`)
//     } else{
//         document.write(`Your total amount to be paid is: ${(((Days*2)*3)*4)}`)
//     }


// 8.UPSC Selection Process
// let age=parseInt(prompt("Enter the age"))
// if(age>=21&&age<=32){
//     let  graduate=prompt("Enter if you are graduate or not graduate")
//     if(graduate=="graduate"||graduate=="Graduate"){
//         let Nationality=prompt("Enter your nationality")
//         if(Nationality=="Indian"||Nationality=="indian"){
//             let score=parseFloat(prompt("Enter your score oout of 100"))
//             if(score>=80){
//                 let MainScore=parseFloat(prompt("Enter The Score out of 100"))
//                 if(MainScore>=80){
//                     let InterviewScore=parseFloat(prompt("Enter The Score of interview out of 100"))
//                      if(InterviewScore>=80){
//                         document.write(`Congratulation You Clear UPSC Exam`)
//                      }else{
//                         document.write(`You failed the Interview`)
//                      }
//                 }else{
//                     document.write(`You failed the Mains`)
//                 }
//             }else{
//                 document.write(`You failed the Prelims`)
//             }
        
//     }else{
//         document.write(`You are not elligible Due to Nationality`)
//     }
    
//     }else{
//         document.write(`Your Graduation is not Eligible for UPSC Exam`)

//     }
// }else{
//     document.write(`Your age is not Eligible for UPSC Exam`)
// }
   

//