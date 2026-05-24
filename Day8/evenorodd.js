function callback(even)
{
      even()
}

callback(function()
{
    let num=101;
    if(num%2===0)
      {
        console.log("it is an even number");
        
      }else
      {
        console.log("it is an odd number");
        
      }
}
)