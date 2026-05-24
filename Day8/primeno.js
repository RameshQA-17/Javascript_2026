function callback(prime)
{
    prime()
}

callback(function()
{
    let num=13

    if(num>1 || num%2===0 )

        {
            if(num%1===0 || num%num===0)
            {
                console.log("it is prime number");
                
            }
            else
            {
              console.log("it is not a prime number ");
                         
            }
        }
        
})
