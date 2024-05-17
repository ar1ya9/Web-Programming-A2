//Variables 

let a=2;
let b=4;
let sum=a+b;
console.log("sum:",sum);

var x=12;
var y=4;
let sub=x-b;
console.log("sub:",sub);

const str="Hello Mr. Perfect!"
const n=y*a;
console.log(str," Your Mark is ",n);

//Data Types

const person={firstName:"Md. ",lastName:"Almahmud"}; //Object Type
console.log("My Name is ",person);

const persons=["Almahmud","Sabbir","Anik"]; //Array
console.log("My Name is ",persons);

const date=new Date("2024-05-17"); //Date
console.log("Today is ",date);

const mafia1="Mafia"+"Rolex"; //String join
console.log(mafia1);

let mafia2= 2 +x+ "Mafia"; //Multi data join
console.log(mafia2);

let he='He is Mr. "Perfect"'; //Quatation
console.log(he);

//Loops
for(let i=0;i<persons.length;i++){   //For Loop
    console.log(persons[i]);
}

let k=1;
while(k<= persons.length){   //While loop
    console.log(persons[k]);
    k=k*2;
}

//Functions

let z=myFunction(a,b);

function myFunction(a,b){
    console.log(a+b);
}

//getElementById x innerHTML
document.getElementById("variable").innerHTML= "Hello World!";