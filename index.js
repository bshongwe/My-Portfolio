// 1. Dropdown Menu Animation JS
document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.getElementsByClassName("dropdown");
  var i;

  for (i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.querySelector(".dropdown-content");
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
});

// 2. Mouse Animation JS
document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
