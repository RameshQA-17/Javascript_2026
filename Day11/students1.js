class students
{
    assignements()
    {
        console.log("students can submit the assignments");
        
    }
    attendence()
    {
        console.log("students should attend the clasess daily");
        
    }
    interview()
    {
        console.log("students should attend the interview once's clasess ends");
        
    }
}

let student1=new students()

student1.name="Ramesh",
student1.role="SDET",
student1.phonenumber=[1234,5678]

let student2=new students()
student2.name="Pavan"
student2.role="developer",
student2.phonenumber=[3434,5353]

console.log(student1.name +" "+ student2.role);
