const textInput = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

textInput.addEventListener("input", (event) => {
   output.textContent = event.currentTarget.value;
});


