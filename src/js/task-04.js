const btnDecrement = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');

const counterValue = 0

document.addEventListener(btnDecrement, () => {
    counterValue -= 1;
    return (valueRef.textContent = counterValue);
});
document.addEventListener(btnIncrement, () => {
    counterValue += 1;
    return (valueRef.textContent = counterValue);
});
