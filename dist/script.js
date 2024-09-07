"use strict";
let screenTitle = document.getElementById('title');
const screenInput = document.getElementById('input');
const screenNext = document.getElementById('next');
const infoArray = [];
const data = ['name', 'age', 'gender', 'description'];
if (screenTitle) {
    screenTitle.innerText = data[0];
    if (screenInput) {
        screenInput.placeholder = data[0];
    }
}
let currentIndex = 1;
screenNext === null || screenNext === void 0 ? void 0 : screenNext.addEventListener('click', () => {
    if (screenInput !== null) {
        infoArray.push(screenInput.value);
        screenInput.value = '';
    }
    if (screenTitle && screenInput && currentIndex < data.length) {
        screenTitle.innerText = data[currentIndex];
        screenInput.placeholder = data[currentIndex];
    }
    currentIndex++;
    console.log('info...', infoArray);
});
