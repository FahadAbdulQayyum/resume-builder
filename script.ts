let screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input') as HTMLInputElement | null;
const screenNext: HTMLElement | null = document.getElementById('next');

const infoArray: any = [];


screenNext?.addEventListener('click', () =>{
    screenInput !== null && infoArray.push(screenInput.value);
    if(screenInput){
        screenInput.value = '';
    }

    console.log('clicked', infoArray.length!==0 ? infoArray: 'Nothing is there in infoArray')
    if(screenTitle){
        console.log(">..>")
        screenTitle.innerText = "Select Your Age";
        if(screenInput){
            screenInput.placeholder = "Enter your age";
        }
        console.log(">..>end")
    }
})