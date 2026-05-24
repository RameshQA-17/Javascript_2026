let mark_grad = 80
let mark_12 = 89
let mark_10 = 90

if (mark_10 >= 85) 
    {
    if (mark_12 >= 90) 
        {
        if (mark_grad > 85) 
            {
            console.log("eligible for campus placements");
            }
        else 
            {
            console.log("not eligible because of less mark in grad");
            }
    }
    else {
        console.log("not eligible becasue of less mark in mark_12");
    }
}
else {
    console.log("not eligible because of less mark in 10th");
}