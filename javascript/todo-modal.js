var button = document.querySelector(".btn");

var modal;
var backdrop;

button.addEventListener("click", showModal);

function showModal() {
  modal = document.createElement("div");
  modal.className = "modal";
  var modalText = document.createElement("p");
  modalText.innerText = "Are You sure";
  var modalCancelActions = document.createElement("button");
  modalCancelActions.innerText = "Cancel";
  modalCancelActions.className = "btn btn--alt";

  modal.append(modalText);
  modal.append(modalCancelActions);
  document.body.appendChild(modal);
  modalCancelActions.addEventListener("click", closeModal);
  backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  document.body.append(backdrop);
  backdrop.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
function closeModal() {
  modal.remove();
  backdrop.remove();
}
