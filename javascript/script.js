window.onscroll = function() {myFunction()};

function myFunction() {
    if(document.documentElement.scrollTop > 400) {
        document.getElementById("header").style.backgroundColor = "black";
        
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        
    }
}