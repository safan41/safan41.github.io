var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'evenin';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Mornin';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');