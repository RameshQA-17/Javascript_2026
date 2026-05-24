function eduloan()
{
  return 10000
}
  
function bikeloan()
{
    return 5000
}

function carloan()
{
    return 20000
}

function totalloan()
{
    console.log("Total loan is"+" "+(eduloan()+carloan()+bikeloan()));
    
}
totalloan()