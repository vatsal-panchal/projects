let themeIcon = document.querySelector("#theme-toggle i");
let input = document.querySelector("#input");
let addBtn = document.querySelector("#add");
let clearAllBtn = document.querySelector("#clear");
let body = document.querySelector("body");
let task = document.querySelector("#task-list");

function toggle() {
  let dark = true;
  themeIcon.addEventListener("click", function () {
    if (dark) {
      body.style.backgroundColor = "#121b2b";
      body.style.color = "white";
      themeIcon.classList.replace("ri-sun-fill", "ri-moon-fill");
      dark = false;
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
      dark = true;
    }
  });
}

toggle();

addBtn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Enter task");
  } else {
    inputValue = input.value;

    let li = document.createElement("li");
    li.textContent = inputValue;
    li.classList.add("dark-mode");
    task.appendChild(li);

    let i = document.createElement("i");
    i.classList.add("ri-delete-bin-line");
    li.appendChild(i);

    i.addEventListener("click", function () {
      li.remove();
    });

    input.value = "";
  }
});

clearAllBtn.addEventListener("click", function () {
  task.innerHTML = "";
});
