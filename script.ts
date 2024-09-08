
let screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input') as HTMLInputElement | null;
const screenNext: HTMLElement | null = document.getElementById('next');
const firstDiv: HTMLElement | null = document.getElementById('first-div');

const screenInputt = document.getElementById('inputt') as HTMLInputElement | null;
const screenNextt: HTMLElement | null = document.getElementById('nextt');

if (screenNextt){
    screenNextt.addEventListener('click', async ()=>{
        let data = await callAPI();
        data = data.filter((v: any)=>v.username===(screenInputt && screenInputt.value));
        console.log('data...||', data.filter((v: any)=>v.username===(screenInputt && screenInputt.value)))
        buildCVV(data[0])
    })
}

const infoArray: any = [];

const data = ['name', 'age', 'gender', 'description']

async function callAPI(){
    const data = await fetch('https://resume-be.vercel.app/data');
    const {data: dataJson} = await data.json();
    console.log('data...', dataJson);
    return dataJson;
}

// callAPI();

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

function buildCVV(data: {name: string, username: string, gender: string, age:number, description: string}){
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

