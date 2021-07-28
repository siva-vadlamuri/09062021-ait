var button = document.querySelector(".btn");

var modal;
var backdrop;

// var, let, const, scope, scope chain,hoisting

button.addEventListener("click", showModal);

function showModal() {
  // create a modal
  // write  some text
  // cancel button
  modal = document.createElement("div");
  modal.className = "modal";
  var modalText = document.createElement("p");
  modalText.innerText = "Are you sure";
  var modalActionCancel = document.createElement("button");
  modalActionCancel.innerText = "Cancel";
  modalActionCancel.className = "btn btn--alt";
  modal.append(modalText);
  modal.append(modalActionCancel);

  document.body.append(modal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  document.body.append(backdrop);
  modalActionCancel.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
function closeModal() {
  modal.remove();
  backdrop.remove();
}

var myFunc = function () {};

myFunc();
