function onClickInputButton(elem) {
  const inputBoxElem = document.querySelector("#input-box");
  const inputBoxValue = inputBoxElem.value;
  document.querySelector(".to-do-list").innerHTML += `
    <li>
    <input
      type="checkbox"
      class="checkbox"
      onclick="onClickCheckbox(this)"
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

function onClickCheckbox(checkboxElem) {
  const liElem = checkboxElem.parentElement;
  const spanElem = liElem.querySelector("span");
  if (checkboxElem.checked) {
    // <s><s> = 텍스트에 줄긋기
    spanElem.innerHTML = `<s>${spanElem.innerText}<s>`;
  } else {
    spanElem.innerHTML = `${spanElem.innerText}`;
  }
}
