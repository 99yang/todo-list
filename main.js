function onClickInputButton(elem) {
  const inputBoxElem = document.querySelector("#input-box");
  const inputBoxValue = inputBoxElem.value;
  document.querySelector(".to-do-list").innerHTML += `
    <li>
    <input
      type="checkbox"
      class="checkbox"
     
    />
    <span>${inputBoxValue}</span>
    <img
      src="imgs/trash-can-solid.svg"
      alt="deleteBtn"
      width="20"
      height="20"
      onclick="onClickDeleteButton(this)"
    />
  </li>
    `;
  inputBoxElem.value = "";
}

// keycode13 = enter
function enterKey() {
  if (window.event.keyCode == 13) {
    onClickInputButton();
  }
}

function onClickDeleteButton(deleteElem) {
  deleteElem.parentElement.remove();
}
