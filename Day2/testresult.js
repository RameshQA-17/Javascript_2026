let responsecode=302

if(responsecode===200)
{
    console.log("test passed");
}
else if(responsecode===404)
{
    console.log("page not found");
    
}
else if(responsecode===500)
{
    console.log("server error");
    
}
else
{
     console.log("unknown status");
     
}
