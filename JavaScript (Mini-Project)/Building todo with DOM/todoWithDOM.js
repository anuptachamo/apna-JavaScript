let btn = document.querySelector("button"); //Add Task button
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
  console.log("button clicked");
  let item = document.createElement("li"); //add new list element
  item.classList.add("list"); // add new class for styling
  item.innerText = input.value; //stored the value of input in innerText of item
  ul.appendChild(item); //stored in ul child element that is li

  let delBtn = document.createElement("button"); //created new delete button
  delBtn.innerText = "Delete"; //Add text on new button
  delBtn.classList.add("delete"); //Add delete class for new delete button
  item.appendChild(delBtn); //stored in item(item is a obj of li) child element that is button which class name is delete

  input.value = " "; //after clicking Add task button it refresh
});

// Event Delegation
ul.addEventListener("click", function (event) {
  // console.log(event.target.nodeName);  //nodeName show who is exactly triggering it [nodeName = "BUTTON"], triggering the BUTTON
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    console.log(listItem);
    listItem.remove(); //delete listItem
    console.log("delete");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//     console.log("element deleted");
//   });
// }
