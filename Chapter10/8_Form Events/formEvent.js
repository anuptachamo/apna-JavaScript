let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); //preventDefault help to stay in same page with submitting the form it won't indirect to /action page
  // console.log("form submitted");
  alert("form submitted");
});
