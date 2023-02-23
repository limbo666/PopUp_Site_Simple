var octocat = document.getElementById("octocat");

octocat.addEventListener("mouseover", function() {
    octocat.style.right = "0";
});

/*octocat.addEventListener("mouseout", function(event) {
    var bounds = octocat.getBoundingClientRect();
    var x = event.clientX - bounds.left;
    if (x < 0) {
        octocat.style.right = "0px";
    } else if (x > bounds.width) {
        octocat.style.right = "100vw";
    }
});
*/
octocat.addEventListener("mouseout", function(event) {
    var bounds = octocat.getBoundingClientRect();
    var x = event.clientX - bounds.left;
    if (x < 0) {
        octocat.style.right = "0px";
    } else if (x > bounds.width && event.clientX < window.innerWidth) {
        octocat.style.right = "100vw";
    }
});


octocat.addEventListener("click", function() {
    window.open("http://www.github.com");
});
