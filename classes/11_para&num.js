//  Parameters and arguments
function calculate_square(num1=0,num2=0){
    console.log(num1,num2)
}
calculate_square(40,50)
//----------------------------------------------------------------------------------------

function generic_function(n1,n2){
    console.log(n1**n2)

}
generic_function(5,3)//it is number in first position(5) and its power is 2nd position(3)

// WAP to cheack the character is voewl or not

function voe(char){
    if ((char=="a" )|| (char=="e" )|| (char=="i") || (char=="o")|| (char=="u")) {
        console.log("it is voewl")
    }else{
        console.log("not voewl")
    }

}
voe("a")


//-------------------------------------------------- Return Keyword

function add(total_cash,used_cash){
    return total_cash-used_cash

}
let total_cash=100
let used_cash=50
let data=add(total_cash,used_cash)
console.log(data-5)