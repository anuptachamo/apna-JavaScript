let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  //event is default agrument
  event.preventDefault(); //preventDefault help to stay in same page with submitting the form it won't indirect to /action page

  /*let user = document.querySelector("#user");
  let password = document.querySelector("#pass");*/

  //   Alternative of code line no. 7 to 8
  console.dir(form);
  console.dir(form.elements);
  let user = this.elements[0];  //alternative of this line --> form.elements[0]
  let password = this.elements[1];

  console.dir(user);
  console.dir(user.innerText); //In this case there will be not gonna print in innerText
  console.dir(user.value); //In value the input text will be stored
  console.dir(password.value); //In value the input text will be stored

  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
