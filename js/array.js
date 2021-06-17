// Array

document.write("🍂Array🍃"+"<br>");
document.write("🍏🍏🍏🍏🍏🍏🍏🍏🍏"+"<br>");

var ary = ['apple',false];
document.write(ary + "<br>");
document.writeln(ary[0] +"<br>");

// --------------------

var array= new Array(2,6,4)
document.write("<ul>");
var sum = 0;
for (let index = 0; index < array.length; index++) {
    document.write("<li>" + array[index] + "</li>");
    sum = sum + array[index]; 
}
document.write("</ul>");
document.write("total sum : " + sum);


//  Array Methods

document.write("<br><br><br><br><br>");
document.write("🍂Array Methods🍃"+"<br>");
document.write("🍏🍏🍏🍏🍏🍏🍏🍏🍏"+"<br>");

var a = new Array(5,6,7,1,3);
document.write(a);
document.write("<br>");
a.sort();
document.write("Array asc. order sorting : " + a);

document.write("<br>");
a.reverse();
document.write("Array desc. order sorting : " + a);

document.write("<br>");
a.pop();
document.write("Array element delete from last : " + a);

document.write("<br>");
a.push("shalu");
document.write("Array element insert from last : " + a);

document.write("<br>");
a.unshift(true);
document.write("Array element insert from first : " + a);

document.write("<br>");
a.shift();
document.write("Array element delete from first : " + a);

//  Array Modification

document.write("<br><br><br><br><br>");
document.write("🍂Array Modification🍃"+"<br>");
document.write("🍏🍏🍏🍏🍏🍏🍏🍏🍏"+"<br>");

var arry = [2,4,33,345];
document.write( arry + "<br>");
arry[1] = "shalu";
document.write("Update Array : " + arry + "<br>");

delete arry[3];
document.write("Delete Array : " + arry + "<br>");


//  Array MuliDimension

document.write("<br><br><br><br><br>");
document.write("🍂Array MuliDimension🍃"+"<br>");
document.write("🍏🍏🍏🍏🍏🍏🍏🍏🍏"+"<br>");

var a =[
    ["raj",18,"male","mca"],
    ["raju",13,"male","ca"],
    ["raja",33,"male","ma"],
    ["rajit",55,"male","be","vikas"],
];
document.write(a [3][4]); //[row][column]