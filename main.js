const price = document.getElementById("price");
const people = document.getElementById("people");
const tip = document.getElementById("tip")
const btn = document.querySelector("button");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");


// costBill = () => {
//     if (price.value === "" || people.value === " " || tip.value === 0) {
//         error.textContent = "Nie wszystkie pola są uzupełnione. Uzupełnij !!";
//         costInfo.style.display = "none";
//     } else {
//         error.textContent = "";
//         countBill();
//     }
// };
// countBill = () => {
//     const priceToPay = Number(price.value);
//     const numberOfPeople = Number(people.value);
//     const tipValue = Number(tip.value);

//     const sumBill = (priceToPay + (priceToPay * tipValue) / numberOfPeople);


//     costInfo.style.display = "block";
//     cost.textContent = sumBill.toFixed(2);

// }

// btn.addEventListener("click", costBill)



costsBill = () => {
    let grow = true;

    if (price.value === "" || people.value === " " || tip.value === 0) {
        grow = true;
    } else {
        grow = false;
    }

    if (grow === true) {
        error.textContent = "Nie wszystkie pola są uzupełnione. Uzupełnij !!";
        costInfo.style.display = "none";
    } else {
        error.textContent = "";
        countBill();
    }
};
countBill = () => {
    const priceToPay = Number(price.value);
    const numberOfPeople = Number(people.value);
    const tipValue = Number(tip.value);

    const sum = (priceToPay + (priceToPay * tipValue) / numberOfPeople);

    costInfo.style.display = "block";
    cost.textContent = sum.toFixed(2);
}

btn.addEventListener("click", costsBill)