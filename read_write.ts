const fss = require('fs');
const path = require('path');

function saveData(turnIntoJsonData: string){
    const filePath = './data.json';
    // const filePath = path.join(__dirname, 'data.json');

    fss.writeFile(filePath, JSON.stringify(turnIntoJsonData), 'utf8', (e:any) => {
        if(e){
            console.error('Error writing to file:', e);
        }else {
            console.log("Data Successfully saved")
        }
    })
}

function readData(){
    // const filePath = path.join(__dirname, 'data.json');
    const filePath = './data.json';

    fss.readFile(filePath, 'utf8', (e:any, data: string) => {
        if(e){
            console.error('Error writing to file:', e);
        }else {
            const parsedData = JSON.parse(data);
            console.log("Data Successfully retrieved", parsedData)
        }
    })
}

// saveData("Hello")

readData()

function printResume(){
    
}