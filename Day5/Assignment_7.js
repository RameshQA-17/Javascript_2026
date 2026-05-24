let fname="Automation"
let count=0

let arr=fname.toLowerCase().split("")

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==="a" || arr[i]==="e" || arr[i]==="i" || arr[i]==="o" || arr[i]==="u")
    {
         count=count+1;
    }
}

console.log(count);

