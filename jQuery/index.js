$("h1").css("color", "red"); //or jQuery("h1").css("color", "red");
/*note that setting values in jQuery is executed by placing parameters
in functions, rather than using the equal sign*/

/*if the jQuery script element is placed within the head secion rather 
than at the bottom of the body element (usually recommended), we can use 
the following code structure for our javascript code to ensure that 
it is executed ONLY when the jQuery resource is fully loaded*/
$(document).ready(function(){
    $("h1").css("color", "red");
})

/*further regarding the .css() function, we can also use it to get the 
property value of a css , for example:*/
console.log($("h1").css("font-size"));

/*using jQuery to add classes to HTML elements (.addClass() method):*/
$("h1").addClass("big-title");
//adding multiple:
$("h1").addClass("big-title margin-50");

/*using jQuery to remove classes from HTML elements (.removeClass() method):*/
$("h1").removeClass("big-title");

/*using jQuery to query whether a certain class is applied to an element*/
$("h1").hasClass("big-title"); //returns a boolean

/*Manipulating text with jQuery:*/
$("h1").text("Bye");

//manipulating actual HTML code using jQuery
$("button").html("<em>Hey</em"); 

//manipulating HTML attributes with jQuery:
$("a").attr("href", "https://www.yahoo.com"); //setter
$("img").attr("src"); //getter