"use strict";
let screenTitle = document.getElementById('title');
const screenInput = document.getElementById('input');
const screenNext = document.getElementById('next');
const infoArray = [];
screenNext === null || screenNext === void 0 ? void 0 : screenNext.addEventListener('click', () => {
    screenInput !== null && infoArray.push(screenInput.value);
    if (screenInput) {
        screenInput.value = '';
    }
    console.log('clicked', infoArray.length !== 0 ? infoArray : 'Nothing is there in infoArray');
    if (screenTitle) {
        console.log(">..>");
        screenTitle.innerText = "Select Your Age";
        if (screenInput) {
            screenInput.placeholder = "Enter your age";
        }
        console.log(">..>end");
    }
});
