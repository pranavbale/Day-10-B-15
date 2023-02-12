let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let address = document.querySelector("#address");
let pincode = document.querySelector("#pincode");
let gender = document.querySelector("#gender");
let food = document.querySelector("#food");
let state = document.querySelector("#state");
let country = document.querySelector("#country");
let submit = document.querySelector("#submit");
let display = document.getElementById("table");

submit.addEventListener("click", () => {
    let row = display.insertRow();
    let rowFirstName = row.insertCell();
    rowFirstName.innerHTML = `${firstName.value}`;

    let rowLastName = row.insertCell();
    rowLastName.innerHTML = `${lastName.value}`;

    let rowAddress = row.insertCell();
    rowAddress.innerHTML = `${address.value}`;

    let rowPincode = row.insertCell();
    rowPincode.innerHTML = `${pincode.value}`;

    let rowGender = row.insertCell();
    rowGender.innerHTML = `${gender.value}`;

    let rowFood = row.insertCell();
    rowFood.innerHTML = `${food.value}`;

    let rowState = row.insertCell();
    rowState.innerHTML = `${state.value}`;

    let rowCountry = row.insertCell();
    rowCountry.innerHTML = `${country.value}`;

    let edit = row.insertCell();
    edit.innerHTML = `
    <input type="button" class="btn btn-primary ed" value="Edit" onclick = "edit()"></p><input type="button" class="btn btn-primary del" value="Delete" onclick="del()">
    `
})


let edit = function () {
    console.log("edit");

}

function del() {
    console.log("Delete");
}