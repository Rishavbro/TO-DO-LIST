let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    if(inputBox.value === ''){
        alert("please enter a value")
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();

})



listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){[
    listContainer.innerHTML = localStorage.getItem("data")
]}

showTask();