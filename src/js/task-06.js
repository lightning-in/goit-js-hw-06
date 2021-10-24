const inputRef = document.querySelector('#validation-input');
const datasetLength = parseInt(inputRef.dataset.length);

const onValidSimbolsInInput = (event) => {
    if (event.currentTarget.value.length !== datasetLength) {
        event.currentTarget.classList.replace("invalid", "valid");
        return
    }
    event.currentTarget.classList.add("valid");
};

inputRef.addEventListener("blur", onValidSimbolsInInput);