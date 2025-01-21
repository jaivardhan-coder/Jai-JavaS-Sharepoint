let n1=5
let n2=2
let add=(n1,n2)=>{ let res1=n1+n2 ; return res1}
let sub=(n1,n2)=>{return n1-n2}
let multi=(n1,n2)=>{return n1*n2}
let div=(n1,n2)=>{return n1/n2}
let input=prompt('Enter the + - / * ')
switch(input){
    case "+":
        
        document.write(add(n1,n2))
        break;
    case "-":
        
        document.write(sub(n1,n2))
        break;
    case "/":
        
            document.write(div(n1,n2))
            break;
    case "*":
        
            document.write(multi(n1,n2))
                break;
}