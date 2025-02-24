document; //selects entire HTML Page
document.firstElementChild; //selects the <html>...</html> element and everything within it
document.firstElementChild.firstElementChild; //usually returns the Head Element + its contents
document.firstElementChild.lastElementChild; //usually returns the body element + its contents

document.firstElementChild.lastElementChild.firstElementChild; //let's say this brings us to a H1

//...we can save it in a Javascript variable:
var heading = document.firstElementChild.lastElementChild.firstElementChild;

//we can then target the heading variable with functions to modify our H1 as we wish:
heading.innerHTML = "Good Bye"; //"innerHTML" denotes the part between the given HTML tags
