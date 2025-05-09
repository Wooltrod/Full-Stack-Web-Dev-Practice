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

//adding event listeners with jQuery (click event):
$("h1").click(function(){
    $("h1").css("color", "purple");
});

//jQuery removes the need for for loops:
for (var i =0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

//shorter version of above code using jQuery
$("button").click(function(){
    $("h1").css("color", "purple");
});

//another example with the keypress event:
$("input").keypress(function(event){
    console.log(event.key);
});

/*the "on()" keyword to define events as parameters 
(mouse hovering event in this example):*/
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

/*Challenge: With every kestroke, change the h1 of 
your webpage to the same value as the pressed key*/

$("document").keypress(function(event){
    $("h1").text(event.key);
});

/* Adding and removing elements with jQuery*/
$("h1").before("<button>New</button>");
$("h1").before("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

//Website animations with jQuery:
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
