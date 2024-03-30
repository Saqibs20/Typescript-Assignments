// write a program that objects containing these items.

// let person_Name :string = 'Saqib';

// const personName_array :(string | Number)[] = ['Person', 'Car','Cold Drink'];

interface person{
    age : number,
    name : string,
    Nationality : string,
    Student : boolean
}



let person :person ={
    age : 25 ,
    name : 'Saqib',
    Nationality : 'Pakistani',
    Student :true

}
console.log(person);

interface car {
    maker : string
    color : string
    automatic : boolean
}


let car = {
    maker : "Toyota",
    Color :"White" ,
    automatic : true 
}

console.log(car);