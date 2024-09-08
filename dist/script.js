"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let screenTitle = document.getElementById('title');
const screenInput = document.getElementById('input');
const screenNext = document.getElementById('next');
const firstDiv = document.getElementById('first-div');
const screenInputt = document.getElementById('inputt');
const screenNextt = document.getElementById('nextt');
if (screenNextt) {
    screenNextt.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield callAPI();
        data = data.filter((v) => v.username === (screenInputt && screenInputt.value));
        console.log('data...||', data.filter((v) => v.username === (screenInputt && screenInputt.value)));
        buildCVV(data[0]);
    }));
}
const infoArray = [];
const data = ['name', 'age', 'gender', 'description'];
function callAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch('https://resume-be.vercel.app/data');
        const { data: dataJson } = yield data.json();
        console.log('data...', dataJson);
        return dataJson;
    });
}
// callAPI();
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
    if (currentIndex === data.length + 1) {
        buildCV();
    }
});
function buildCV() {
    const cvContainer = document.createElement('div');
    cvContainer.className = 'cv-container';
    const header = document.createElement('h2');
    header.innerText = "RESUME BUILDER";
    const paragraph = document.createElement('p');
    paragraph.innerText = `Name: ${infoArray[0]}\n
                            Age: ${infoArray[1]}\n
                            Gender: ${infoArray[2]}\n
                            Description: ${infoArray[3]}
                            `;
    // cvContainer.appendChild(header);
    // cvContainer.appendChild(paragraph);
    if (firstDiv !== null) {
        firstDiv.innerText = "";
        firstDiv.appendChild(header);
        firstDiv.appendChild(paragraph);
        firstDiv.className = "first-divv";
        firstDiv.style.backgroundColor = "orange";
    }
    else {
        console.error('First div does not exist.');
    }
}
function buildCVV(data) {
    const cvContainer = document.createElement('div');
    cvContainer.className = 'cv-container';
    const header = document.createElement('h2');
    header.innerText = "RESUME BUILDER";
    const paragraph = document.createElement('p');
    paragraph.innerText = `Name: ${data.name}\n
                            Age: ${data.age}\n
                            Gender: ${data.gender}\n
                            Description: ${data.description}
                            `;
    // cvContainer.appendChild(header);
    // cvContainer.appendChild(paragraph);
    if (firstDiv !== null) {
        firstDiv.innerText = "";
        firstDiv.appendChild(header);
        firstDiv.appendChild(paragraph);
        firstDiv.className = "first-divv";
        firstDiv.style.backgroundColor = "orange";
    }
    else {
        console.error('First div does not exist.');
    }
}
