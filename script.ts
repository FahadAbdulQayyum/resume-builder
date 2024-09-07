const fs = require('fs');

let screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input') as HTMLInputElement | null;
const screenNext: HTMLElement | null = document.getElementById('next');
const firstDiv: HTMLElement | null = document.getElementById('first-div');

const infoArray: any = [];

const data = ['name', 'age', 'gender', 'description']

if(screenTitle){
    screenTitle.innerText = data[0];
    if(screenInput){
        screenInput.placeholder = data[0];
    }
}

let currentIndex = 1;

screenNext?.addEventListener('click', () =>{
    if(screenInput !== null){
        infoArray.push(screenInput.value);
        screenInput.value = '';
    } 

    if(screenTitle && screenInput && currentIndex < data.length){
        screenTitle.innerText = data[currentIndex];
        screenInput.placeholder = data[currentIndex];
    }
    currentIndex++;
    console.log('info...', infoArray)
    if(currentIndex === data.length+1){
        buildCV();
    }
})

function buildCV(){
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

    if(firstDiv !== null){
        firstDiv.innerText = ""
        firstDiv.appendChild(header);
        firstDiv.appendChild(paragraph);
        firstDiv.className = "first-divv"
        firstDiv.style.backgroundColor = "orange";
    }else {
        console.error('First div does not exist.')
    }
}

