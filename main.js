nameOfTheStudentArray = [];
function  submit()
{
    var displayStudentArray = [];
for (var j = 1; j <= 4; j++)
{
    var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
    console.log(nameOfTheStudent);
    nameOfTheStudentArray.push(nameOfTheStudent);

}
console.log(nameOfTheStudentArray);

var lenghtOfTheStudentArray = nameOfTheStudentArray.length;

for (var k = 0; k< lenghtOfTheStudentArray; k++)
{
 displayStudentArray.push("<h4>NOME -"+ nameOfTheStudentArray[k] + "<h4>");
 console.log(displayStudentArray);
}

console.log(displayStudentArray);
document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

var  removeCommas = displayStudentArray.join(" ");
console.log(removeCommas)
document.getElementById("displayNameWithCommas").innerHTML = removeCommas

document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";
}




