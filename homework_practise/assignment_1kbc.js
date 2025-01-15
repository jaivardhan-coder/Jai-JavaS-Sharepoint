//1-- Student Grading System

// let marks=(prompt("Enter Your Marks Out of 100 "))
// if(marks>=90&&marks<=100){
// document.write(`<h2>Your Marks is: ${marks} - Grade A</h2>`)
// } else if(marks>=80&&marks<=89){
//     document.write(`<h2>Your Marks is: ${marks} - Grade B</h2>`)
// } else if(marks>=70&&marks<=79){
//     document.write(`<h2>Your Marks is: ${marks} - Grade C</h2>`)
// } else if(marks>=60&&marks<=69){
//     document.write(`<h2>Your Marks is: ${marks} - Grade D</h2>`)
// } else if(marks>=50&&marks<=59){
//     document.write(`<h2>Your Marks is: ${marks} - Grade E</h2>`)
// } else if(marks>=0&&marks<=49){
//     document.write(`<h2>Your Marks is: ${marks} - Grade F</h2>`)
// } else{
//     document.write(`Invalid Marks`)
// }

// ------------------------------------------------------------------------------------------------------------------------------------
//2-- Tax Calculation

// let CarBrand=prompt("Enter the Car Brand Options Are- Mahindra,Audi,Jaguar,Mercedes") 
// let CostPrice=parseFloat(prompt('Enter The price in Lakhs ')) 
// if((CarBrand=="Mahindra"|| CarBrand=="mahindra" )&&(CostPrice>=700000 && CostPrice <=1000000)){
//     document.write(`<h2>Your Tax Wil be in Mahindra car is:  ${ CostPrice*0.05}</h2>`)
// }else if((CarBrand=="Audi"|| CarBrand=="audi")&&(CostPrice>=1000000 && CostPrice<=1500000)){
//     document.write(`<h2>Your Tax Wil be in Audi car is: ${CostPrice*10/100}</h2>`)
// }else if((CarBrand=="Jaguar"||CarBrand=="jaguar")&&(CostPrice>=1500000 && CostPrice<=2000000)){
//     document.write(`<h2>Your Tax Wil be in Jaguar car is: ${CostPrice*25/100}</h2>`)
// }else if((CarBrand=="Mercedes"|| CarBrand=="mercedes")&&(CostPrice>=2000000 && CostPrice<=2500000)){
//     document.write(`<h2>Your Tax Wil be in Mercedes car is: ${CostPrice*30/100}</h2>`)
// }else {
//     document.write("<h2>Wrong option OR Wrong Price</h2>")
// }

// -------------------------------------------------------------------------------------------------------------------------------------
//3-- Finding The middle number

// let num1=prompt("Enter the First number")
// let num2=prompt("Enter the Second number")
// let num3=prompt("Enter the Third number")
// if((num2>num1&&num1>num3)|| num2<num1&&num1<num3){
//     document.write(`<h2>Middle number of ${num1}, ${num2}, ${num3} is = ${num1}</h2>`)
// }else if((num2 > num3 && num2 < num1 )|| (num2< num3 && num2> num1)){
//     document.write(`<h2>Middle number of ${num1}, ${num2}, ${num3} is = ${num2}</h2>`)
// } else{
//     document.write(`<h2>Middle number of ${num1}, ${num2}, ${num3} is = ${num3}</h2>`)
// }

// ------------------------------------------------------------------------------------------------------------------------------------
//4-- finding the biggest number

// let num1=parseFloat(prompt("Enter the First number"))
// let num2=parseFloat(prompt("Enter the Second number"))
// let num3=parseFloat(prompt("Enter the Third number"))
// if((num1>=num2)&&(num1>=num3)){
// document.write(`<h2>Biggest Number is : ${num1}</h2>`)
// } else if((num2>=num1)&&(num2>=num3)){
//     document.write(`<h2>Biggest Number is : ${num2}</h2>`)
// } else{
//     document.write(`<h2>Biggest Number is : ${num3}</h2>`)
// }

// ------------------------------------------------------------------------------------------------------------------------------------
//5-- Authentication 

// let username=prompt("Enter the Username")
// let userpassword=prompt("enter the password")
// if(username==("user1")&& userpassword==("pass@123")){
// document.write(`<h2>authentication succesful</h2>`)
// }else{
//     document.write(`<h2>authentication fail</h2>`)
// }

// -------------------------------------------------------------------------------------------------------------------------------------
// 6-calculate class attendence

// let AttendencePercent=parseInt(prompt("Enter your attendence in Percent ,to cheak if you are Eligible for exam"))
// if(AttendencePercent>=75){
//     document.write(`<h2>You are Eligible</h2>`)

// }else{
//     document.write(`<h2>You are not Eligible</h2>`)
// }

// -------------------------------------------------------------------------------------------------------------------------------------
// 7.Library Charge Calculation

// let Days=parseInt(prompt("Enter the Number of day you borrow a book"))
//     if(Days>=5&&Days<=1){
//         document.write(`<h2>Your total amount to be paid is: ${Days*2}</h2>`)
//     } else if(Days>=6&&Days<=10){
//         document.write(`<h2>Your total amount to be paid is: ${(Days*2)*3}</h2>`)
//     } else if(Days>=11&&Days<=15){
//         document.write(`<h2>Your total amount to be paid is: ${((Days*2)*3)*4}</h2>`)
//     } else{
//         document.write(`<h2>Your total amount to be paid is: ${(((Days*2)*3)*4)}</h2>`)
//     }


// -------------------------------------------------------------------------------------------------------------------------------------
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
//                         document.write(`<h2>Congratulation You Clear UPSC Exam</h2>`)
//                      }else{
//                         document.write(`<h2>You failed the Interview</h2>`)
//                      }
//                 }else{
//                     document.write(`<h2>You failed the Mains</h2>`)
//                 }
//             }else{
//                 document.write(`<h2>You failed the Prelims</h2>`)
//             }
        
//     }else{
//         document.write(`<h2>You are not elligible Due to Nationality</h2>`)
//     }
//     <h2>
// //     }else{
//         document.write(`<h2>Your Graduation is not Eligible for UPSC Exam</h2>`)

//     }
// }else{
//     document.write(`<h2>Your age is not Eligible for UPSC Exam</h2>`)
// }
   
// --------------------------------------------------------------------------------------------------------------------------------------

//9. Menu-Driven Login System

// let choice=prompt("Enter Your login by- \nA.Email\nB. Contact\nC. Exit")
// if(choice=="A"){
//     let User_Email=prompt("Enter the Email-ID")
//     let User_password=prompt("Enter the password")
//     if ((User_Email=="user@example.com")&&(User_password=="password1234")){
//                 document.write(`<h2>Login Succesfull With Email-ID</h2>`)
//             }else{
//                 document.write(`<h2>Sorry! Please Enter Valid Phone Number</h2>`)
//             }
//     }else if(choice=="B"){
//             let user_phone=prompt("Enter the contact number")
//             let user_otp=prompt("Enter the OTP")
//             if((user_phone==123456789) && ( user_otp==1234)){
//             document.write(`<h2>Login Succesfull With Phone Number</h2>`)
//             }else{
//                 document.write(`<h2>Sorry!Please Enter Valid Phone Number</h2>`)
//             }
//         }else if(choice=="C"){
//                 document.write(`<h2>You Exit Successfully </h2>`)
//               }

// ------------------------------------------------------------------------------------------------------------------------------------

// 10- KBC Game

let game=prompt("<NAMASKAR,SATSHRIAKAL Kaun Banega Arabpati Mai Apka Swagat hai.🙏 \n jese ki sabhi ko maloom hai Jitne Sahi Jawab utne Khel mai Jude Rahe.✅ To chaliye Suru Karte hai.. Kya Ap Tyar Hai??? \n1: Yes \n2: No")
let total_score=0
let correct_answer=0
let wrong_answer=0
let skip_answer=0
if(game=="1"){
    let question1=prompt("To chaliye Suru Karte hai.. \n Phela Sawal Apki Computer screen par📺 \nWhich data type is NOT supported in JavaScript? \nOptions are : \na: String\nb: Boolean \nc: Integer \nd: Undefined \npress S for Skip the question")
    if(question1=="c"){
        correct_answer += 1
        total_score += 1000
    }else if(question1=="S"){
        skip_answer += 1
    }else{
        wrong_answer+=1
    }

    let question2=prompt("Dusra Sawal Apki Computer Screen par: \nWhich of the following is used to declare a variable in JavaScript? \nApke options hai \na: let \nb: var \nc: const \nd: All above \npress S for Skip the question")
    if(question2=="d"){
        correct_answer += 1
        total_score += 2000
    }else if(question2=="S"){
        skip_answer += 1
    }else{
        wrong_answer+=1
    }
    let question3=prompt("Teesra Sawal Apki Computer Screen par: \nWhich data type is NOT supported in JavaScript? \nApke options hai \na: string \nb: boolean \nc: integer  \nd: undefined \npress S for Skip the question")
    if(question3=="c"){
        correct_answer += 1
        total_score += 3000
    }else if(question3=="S"){
        skip_answer += 1
    }else{
        wrong_answer+=1
    }let question4=prompt("Chautha Sawal Apki Computer Screen par: \nWhat is the result of typeof NaN in JavaScript? \nApke options hai \na: number \nb: NaN \nc: Undefined \nd: object \npress S for Skip the question")
    if(question4=="a"){
        correct_answer += 1
        total_score += 5000
    }else if(question4=="S"){
        skip_answer += 1
    }else{
        wrong_answer+=1
    }let question5=prompt("Panchva sawal  Apki Computer Screen par: \nHow can you convert a string 123 into a number in JavaScript? \nApke options hai \na: parseInt (123) \nb: parseInt(123) \nc: +123 \nd: All above \npress S for Skip the question")
    if(question5=="d"){
        correct_answer += 1
        total_score += 10000
    }else if(question5=="S"){
        skip_answer += 1
    }else{
        wrong_answer+=1
    }
    document.write(`<h2>Bohot Bohot Bhadhaiya Apka Total Score Game mai hai: ${total_score} </h2> `)
document.write(`<h2> Sahi sawal k uttar  5 mai se apke dwara : ${correct_answer} </h2> `)
document.write(` <h2>skip kre gae sawal  khel mai apke dwara: ${skip_answer} </h2> `)
document.write(` <h2> galat sawal ke uttar 5 mai se khel mai apke dwara: ${wrong_answer}</h2>`)

}else{
    document.write(`<h2>Thank You ! Try Next Time  ......</h2> `)
}

 let rating=prompt("Agar Khel Pasand Aya Ho To Hume Rating Zarur De. Dhanyavad! 5⭐ Mai Se")
 if(rating>=1&&rating<=5){
    document.write(`<h2>Bohot Bohot Dhanyavad Hame ${rating}⭐ Rating dene k lie</h2>`)
 }else{
    document.write(`<h2>Kripya Rating 1⭐-- 5⭐ ke beech mai de . Dhanyavad</h2>`)
 }
