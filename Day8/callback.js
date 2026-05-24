function callme(fn)
{
    console.log("started");

    fn();

    console.log("ended");
    
}
callme(function()
{
    let num=10+10;
    console.log(num);
    
}
)