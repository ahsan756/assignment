//////// 1 ////////////

console.log("No: 1");

var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"},
]

var juicePrice = itemsArray[0].price;
var juiceQuantity = itemsArray[0].quantity; 

var cookiePrice = itemsArray[1].price;
var cookieQuantity = itemsArray[1].quantity; 

var shirtPrice = itemsArray[2].price;
var shirtQuantity = itemsArray[2].quantity; 

var penPrice = itemsArray[2].price;
var penQuantity = itemsArray[2].quantity; 

var totalPrice = ((juicePrice * juiceQuantity) + (cookiePrice * cookieQuantity) + (shirtPrice * shirtQuantity) + (penPrice * penQuantity));

console.log("Total Price of cookie " + (cookiePrice * cookieQuantity));
console.log("Total Price of all items " + totalPrice );

//////// 2 //////////
console.log("No: 2");

var obj = {
    fname: "Ahsan",
    email: "advjh@gmail.com",
    password: "asdfg",
    age: "12",
    gender: "Male",
    Country: "pakistan"
}

if('Country' in obj){
    console.log("The property exists");

}
else{
    console.log("The property doesn't exists");
}


/////////// 3 ///////////




function Foo (name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var newRecord = new Foo("Ahsan", "19", "Male");
var newRecord1 = new Foo("Faizan", "20","Male");


/////////// 4 ////////////


function Pchecker (name, gender, education, profession){
    this.name =  name;
    this.gender = gender;
    this.education = education;
    this.profession = profession;
}

var Ahsan = new Pchecker("Ahsan", "Male", "BE", "Developer");
var Faizan = new Pchecker("Faizan", "Male", "BSC", "Teacher");
var Usama = new Pchecker("Usama", "Male", "BSC", "Software Developer");

localStorage.setItem("Ahsan", JSON.stringify(Ahsan));
localStorage.setItem("Faizan", JSON.stringify(Faizan));
localStorage.setItem("Usama", JSON.stringify(Usama));



//////////////////////////////////////////////////////////////////////////////////


































