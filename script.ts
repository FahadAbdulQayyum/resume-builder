let screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input') as HTMLInputElement | null;
const screenNext: HTMLElement | null = document.getElementById('next');

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
})