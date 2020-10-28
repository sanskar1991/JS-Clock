/*
This is multiline comment.
*/
// This is single line comment

// document.write("You'll see a clock here.");
// document.getElementById("para").innerHTML = 'This is a paragraph.'

/*
var a1 = 10
var a2 = 20
var a3 = "Hello"
document.write(a1+a2,"<br>"); // Break the line

name = prompt("What is you name?")
document.write("Hi ",name,"!")
// alert("Your age is ",name)
*/

tot_amount = prompt("Give the total amount:")
no_of_people = prompt("Number of people:")
document.write("Total amount is ", tot_amount,"<br>")
document.write("Distribute among ",no_of_people," people <br>")
document.write("Per person cost is ",(tot_amount/no_of_people).toFixed(2),"<br>")