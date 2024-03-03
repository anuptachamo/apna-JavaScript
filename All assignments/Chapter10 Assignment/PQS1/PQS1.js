/**
 *  PQS1. Try out the following in Event Listener on your own:
 *      - mouseout
 *      - keypress
 *      - Scroll
 *      - load
 */

// mouseout example
let test = document.getElementById("test");

test.addEventListener("mouseout", function (event) {
  event.target.style.color = "orange"; // highlight the mouseout target

  setTimeout(() => {
    event.target.style.color = ""; // reset the color after a short delay
  }, 1000);
});

// keypress event
let input = document.querySelector("input");
let log = document.getElementById("log");

input.addEventListener("keypress", logkey);

function logkey(event) {
  log.textContent += `${event.code}`; //.code help to find key in textContent
}

//load Events (The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.)
const logs = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  logs.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  logs.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  logs.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  logs.textContent += `DOMContentLoaded\n`;
});
