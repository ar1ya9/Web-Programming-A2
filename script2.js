//Interactions

alert("Warning!");
//result=prompt("Write Something: ", "Like Hello World");

let info = confirm("Are you want to Enter?");
//Conditions
if (info == true) {                            //If Else
    let age = prompt("Enter You Age: ", "18");
    alert(`Your Age is ${age}.`);
}
else {
    alert("Go Back");

    //Basic Operation
    let num1 = 2;
    num1 = -num1; //unary operation
    alert(num1);

    alert(3 % 2); //Remainder
    alert(3 ** 2); //Exponential

    let an = "2";
    let bn = "3";
    alert(an + bn);
    alert(Number(an) + Number(bn)); //convert in number

    let v = (1 + 2, 3 + 4); //comma fix 
    alert(v);

    alert(5 & 1); //bitwise 0101 and 0001 == 0001
    alert(5 >>> 1); //bitwise 0101 rsh 0001 == 0010
}

switch (new Date().getDay()) {
    case 5:
        txt = "Today is Friday.";
        break;
    case 6:
        txt = "Today is Saturday.";
        break;
    default:
        txt = "I don't Think its your day.";

}
alert(txt);

