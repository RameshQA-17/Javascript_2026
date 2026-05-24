let user=
[
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
 },
  {
   "name":"Murgesh",
   "age":30,
   "Skills":"Automation",
   "isactive":false,
   "Mobilenumber":
                 {
                    "Officeno":7899446355,
                    "Homeno":6363456789
                 },
   "address":
             {
                "PG":"Vinayak Pg",
                "area":"marathahalli",
                "Pincode":560094,
                "city":"Bagalkot",
                "state":"MH"
             }
  } 
]

//console.log(user[1]);
//console.log(user[1].Mobilenumber);
console.log(user[1].Mobilenumber.Homeno);
console.log(user[1].address.state);




