function greet()
{
    console.log("hello js");
    
}
greet()                  //Function Declaration (classic way)

add()                   //calling before declaration:
function add()
{
    console.log(10+10);
    
}


let demo=function()     //Function Expression
{
    console.log("Hello Java");
    
}

demo()

let sample=()=>    //Arrow Function (ES6+)
{
    console.log("Hello ramesh");
    
} 
sample()
