import {sortData, filterData} from './data.js';

import data from './data/ghibli/ghibli.js';

export const show=(contentGhibli,img,back1,back2)=>{
    let i=0;
    const box = document.createElement('section'); 
    box.classList.add('container')
    while(i<contentGhibli.length)
    {
     
    const targetBox=document.createElement('div');
    const target = document.createElement('div');
    const faceTarget = document.createElement('div');
    const poster = document.createElement('img');
    const backTarget= document.createElement('div');
    const title = document.createElement('div');
    const window = document.createElement('img');
    
    poster.src = contentGhibli[i][img];
    
    let description = contentGhibli[i][back1];
    let titulo = contentGhibli[i][back2];
    title.textContent = titulo;
    window.src = 'img/pink.svg';
  
    title.classList.add('titleFilm');
    
    backTarget.innerHTML = titulo + '<br>' + 'score: ' + description;
   
    targetBox.classList.add('target-box');
    
    target.classList.add('target');
    window.classList.add('window');
    faceTarget.classList.add('faceTarget');
    backTarget.classList.add('backTarget');
    poster.classList.add('poster');
    
    document.getElementById('root').appendChild(box);
    box.insertAdjacentElement('beforeend',targetBox);
    targetBox.insertAdjacentElement('afterbegin',target);
    targetBox.insertAdjacentElement('afterbegin',window);
    
    target.insertAdjacentElement('afterbegin',backTarget);
    target.insertAdjacentElement('afterbegin',faceTarget);
    
    faceTarget.insertAdjacentElement('afterbegin',poster);

    i++;
    }
    return box;
  }

const divRoot = document.getElementById('root');
let btnFilm = document.getElementById('btnFilm');
const options = document.getElementById('options');
//const btnSort = document.getElementById('btnSort');
const btnSort1 = document.getElementById('btnSort1');
const btnsortTitleAsc = document.getElementById('sub1BtnSort1');
const btnsortTitleDesc = document.getElementById('sub2BtnSort1');
const btnSort3 = document.getElementById('btnSort3');
const btnsortDateAsc = document.getElementById('sub1BtnSort3')
const btnsortDateDesc= document.getElementById('sub2BtnSort3')
const btnSort2 = document.getElementById('btnSort2');
const btnsortScoreAsc = document.getElementById('sub1BtnSort2');
const btnsortScoreDesc = document.getElementById('sub2BtnSort2');
const btnFilter1 = document.getElementById('btnFilter1');
const btnFilterHayaoM = document.getElementById('sub1BtnFilter1');
const btnFilterIsaoT = document.getElementById('sub2BtnFilter1');
const btnFilter2 = document.getElementById('btnFilter2');
/*const btnFilter80 = document.getElementById('sub1BtnFilter2');
const btnFilter90 = document.getElementById('sub2BtnFilter2');
const btnFilter00 = document.getElementById('sub3BtnFilter2')*/

btnFilm.addEventListener('click',()=>{
    divRoot.innerHTML = '';
   
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsortTitleAsc.innerText = 'A-Z';
    btnsortTitleDesc.innerText = 'Z-A';
    btnSort2.innerText = 'Popularidad';
    btnsortScoreAsc.innerText = '+ popular';
    btnsortScoreDesc.innerText = '- popular';
    btnSort3.innerText = 'Por estreno';
    btnsortDateAsc.innerText='Newer';
    btnsortDateDesc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnFilterHayaoM.innerText = 'Hayao Miyazaki';
    btnFilterIsaoT.innerText = 'Isao Takahata';
   
})


const films=data.films;
btnsortTitleAsc.addEventListener('click',()=>{
   divRoot.innerHTML = '';
   let ascFilms = sortData(films,'title','asc');
   
   show(ascFilms,'poster','description','title');
})

btnsortScoreAsc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'rt_score','asc'),'poster','rt_score','title');
})

btnsortDateAsc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'release_date','asc'),'poster','release_date','title');
})

btnsortDateDesc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'release_date','desc'),'poster','release_date','title');
})


btnsortTitleDesc.addEventListener('click',()=>{
   divRoot.innerHTML = '';

   show(sortData(films,'title','desc'),'poster','description','title');
})


btnsortScoreDesc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,parseInt('rt_score'),'desc'),'poster','rt_score','title');
})


window.addEventListener("load",()=>{
    options.style.display = 'block';
    btnFilter2.style.display= 'none';
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsortTitleAsc.innerText = 'A-Z';
    btnsortTitleDesc.innerText = 'Z-A';
    btnSort2.innerText = 'Popularidad';
    btnsortScoreAsc.innerText = '+ popular';
    btnsortScoreDesc.innerText = '- lpopular';
    btnSort3.innerText = 'Por estreno';
    btnsortDateAsc.innerText='Newer';
    btnsortDateDesc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnFilterHayaoM.innerText = 'Hayao Miyazaki';
    btnFilterIsaoT.innerText = 'Isao Takahata';

})
let conditionDirector = ['director','Hayao Miyazaki'];
let conditionDirector2 = ['director','Isao Takahata'];

btnFilterHayaoM.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    show(filterData(data,conditionDirector),'poster','title','director')
})

btnFilterIsaoT.addEventListener('click', ()=> {
    divRoot.innerHTML ='';
    show(filterData(data,conditionDirector2),'poster','title','director')
})

