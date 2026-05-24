function sample(name,callback)
{
    console.log("executing test >>>"+name);

    callback()

    console.log("final test >>"+name);
    
}
 sample("login test",function() 
{
    console.log("checking the login functionalit");
    
}

)