//function 
//1.every func has their own purpose
//2.func make organised code base that's easy to bug
//3 func is reuable to performing task repeatedly

//types of function
//1.user-defined-func
//2.inbuiled-function(methods)

//parameters and argument

//category of user defined func.
//1. take nothing return nothing
//2.  take nothing return something
//3.   take something return nothing
//4.  take something return something

// arrow func(annonymous function)
//higer order function(HOF)
    // filer(),map()

// function scoping
//function hoisting
//function closures(nested function)

//--------------------------------------------------------------------------
// let btn=document.getElementById('btn') // we make this for button we click onweb and print here only
function hello(){//function define here
    document.write(`<h1>Functions in javascript</h1><hr>`)
}
hello()//function will call it


//add function
function add(){
    let a=34
    let b=45
    let res=a+b
    document.write(`<h1>Sum of 2 numbers are: ${res}`)
}
add()

//subtract function
function sub(){
    let a=34
    let b=45
    let res=a-b
    document.write(`<h1>Sub of 2 numbers are: ${res}`)
}
sub()

//divide
function div(){
    let a=34
    let b=45
    let res=a/b
    document.write(`<h1>Divible of 2 numbers are: ${res}`)
}
div()

//multiply
function mul(){
    let a=34
    let b=45
    let res=a*b
    document.write(`<h1>Multiple of 2 numbers are: ${res}`)
}
mul()
