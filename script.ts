const screenTitle: HTMLElement | null = document.getElementById('title');
const screenInput = document.getElementById('input') as HTMLInputElement | null;
const screenNext: HTMLElement | null = document.getElementById('next');

const infoArray: any = [];

screenInput!==null && infoArray.push( screenInput.value);

screenNext?.addEventListener('click', () =>{
    console.log('clicked', infoArray.length!==0 ? infoArray: 'Nothing is there in infoArray')
})