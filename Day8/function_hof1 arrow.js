function sample(callback,name)
{ 
     console.log("The execution is"+ name);

     callback()
         
    console.log("finished test"+ name);

}

sample(()=>
{
    console.log("hello js");
    
},"login test");
