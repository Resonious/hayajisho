var form = document.getElementById("search");
var input = document.getElementById("search-term");
var submitted = document.getElementById("search-submitted");
var message = document.getElementById("submitted-message");

form.addEventListener("submit", () => {
  submitted.classList.remove("invisible");
  message.textContent = "Searching \"" + input.value + "\"...";

  input.classList.add("invisible");
});
