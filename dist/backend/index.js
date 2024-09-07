"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fss = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
app.get("/", (req, res) => {
    // return res.text("Hello");
    // res.send("Hellos");
    // return res.json({msg:"Hello World"});
    readData();
});
// app.listen(PORT, (req: Request, res: Response)=> {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
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
            return parsedData;
        }
    });
}
// saveData("Hello")
readData();
