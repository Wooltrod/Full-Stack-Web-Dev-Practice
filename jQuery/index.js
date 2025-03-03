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