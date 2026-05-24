function add(num1,num2)   //“This will be ignored; only the latest will take preference.”
{
     let result=num1+num2
     return result
}
   
function add(num1,num2,num3)
{
    let result=num1+num2+num3
    return result
}   

let addresult=add(10,20)
console.log(addresult);

    