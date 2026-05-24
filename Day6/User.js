let user=
{
   "name":"Ramesh",
   "age":28,
   "skills":"Manual testing",
   "isactive":true,
   "Mobilenumber":[7899446355,6362425935,9878987898],
   "address":
            {
              "PG":"Anjani Pg",
              "Area":"Kundanahalli gate",
              "Pincode":560001,
              "city":"Bangalore",
              "State":"KA"
            }
}
//console.log(user);

console.log(user.isactive);
console.log(user.Mobilenumber[2]);  //indexes
console.log(user.address.Area);  //nested json object   //. dot annotation
console.log(user["name"]);   //bracket annotation



