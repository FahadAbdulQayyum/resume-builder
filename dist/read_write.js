"use strict";
const fss = require('fs');
const path = require('path');
function saveData(turnIntoJsonData) {
    const filePath = './data.json';
    // const filePath = path.join(__dirname, 'data.json');
    fss.writeFile(filePath, JSON.stringify(turnIntoJsonData), 'utf8', (e) => {
        if (e) {
            console.error('Error writing to file:', e);
        }
        else {
            console.log("Data Successfully saved");
        }
    });
}
function readData() {
    // const filePath = path.join(__dirname, 'data.json');
    const filePath = './data.json';
    fss.readFile(filePath, 'utf8', (e, data) => {
        if (e) {
            console.error('Error writing to file:', e);
        }
        else {
            const parsedData = JSON.parse(data);
            console.log("Data Successfully retrieved", parsedData);
        }
    });
}
// saveData("Hello")
readData();
