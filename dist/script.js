"use strict";
const screenTitle = document.getElementById('title');
const screenInput = document.getElementById('input');
const screenNext = document.getElementById('next');
const infoArray = [];
infoArray.push(screenInput);
screenNext === null || screenNext === void 0 ? void 0 : screenNext.addEventListener('click', () => {
    console.log('clicked', infoArray.length !== 0 ? infoArray : 'Nothing is there in infoArray');
});
