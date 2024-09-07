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
Object.defineProperty(exports, "__esModule", { value: true });
const fss = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // return res.text("Hello");
    // res.send("Hellos");
    // return res.json({msg:"Hello World"});
    // readData()
    try {
        const dt = yield readData();
        console.log('dtt', dt);
        return res.json({ data: dt });
    }
    catch (err) {
        console.error('Error reading data:', err);
        return res.status(500).json({ error: 'Failed to read data' });
    }
}));
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
    return new Promise((resolve, reject) => {
        fss.readFile(filePath, 'utf8', (e, data) => {
            if (e) {
                console.error('Error writing to file:', e);
                reject(e);
            }
            else {
                // const parsedData = JSON.parse(data);
                // console.log("Data Successfully retrieved", parsedData)
                // return parsedData;
                try {
                    const parsedData = JSON.parse(data);
                    console.log("Data successfully retrieved", parsedData);
                    resolve(parsedData);
                }
                catch (parseErr) {
                    reject(parseErr);
                }
            }
        });
    });
}
// saveData("Hello")
readData();
