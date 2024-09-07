const screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input');
const screenNext: HTMLElement | null = document.getElementById('next');

const infoArray: any = [];

infoArray.push(screenInput!==null && screenInput.value);

screenNext?.addEventListener('click', () =>{
    console.log('clicked', infoArray.length!==0 ? infoArray: 'Nothing is there in infoArray')
})