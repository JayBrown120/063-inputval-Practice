//create a click handler for the Post button.

var button = $("button");
button.click(function() {
 var talk = $("input").val();
 console.log(talk);
 var commnets = $(".comments");
});






// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
    
});