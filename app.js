
let question=document.querySelector('.qui-content');
let questionNum=document.querySelector('.qui-num');
let Cho1=document.querySelector(".choise1");
let Cho2=document.querySelector(".choise2");
let Cho3=document.querySelector(".choise3");
let Cho4=document.querySelector(".choise4");
let submit=document.querySelector(".submit");
let change=document.querySelector(".next");
let num=1;
change.addEventListener('click',()=>{
 num=Math.floor(Math.random()*35)+1;
 console.log('change');
 let eles=document.querySelectorAll('.choice');
       eles[0].classList.remove('corect');
       eles[1].classList.remove('corect');
       eles[2].classList.remove('corect');
       eles[3].classList.remove('corect');
       eles[0].classList.remove('choiced');
   eles[1].classList.remove('choiced');
   eles[2].classList.remove('choiced');
   eles[3].classList.remove('choiced');
   eles[0].classList.remove('wrong');
   eles[1].classList.remove('wrong');
   eles[2].classList.remove('wrong');
   eles[3].classList.remove('wrong');
 console.log(num)
 CreateQue();

});

function CreateQue(){
 fetch('./test.json').then(response=>response.json()).
then(data=>{
 questionNum.innerHTML=1;
 question.innerHTML=data[num].question;
 Cho1.innerHTML=`
 <span>A)</span>
 <span>${data[num].A}</span>
 `
 Cho2.innerHTML=`
 <span>B)</span>
 <span>${data[num].B}</span>
 `
 Cho3.innerHTML=`
 <span>C)</span>
 <span>${data[num].C}</span>
 `
 Cho4.innerHTML=`
 <span>D)</span>
 <span>${data[num].D}</span>
 `
 questionNum.innerHTML=num;
 let choiced=0;
 let clicked=0;
 let ans;
 let choice;
 document.addEventListener('click',(e)=>{
  if(e.target.classList.contains("choice")){
  if(choiced==0){
   let eles=document.querySelectorAll('.choice');
   eles[0].classList.remove('choiced');
   eles[1].classList.remove('choiced');
   eles[2].classList.remove('choiced');
   eles[3].classList.remove('choiced');
   e.target.classList.add('choiced')
   
  }
   ans=(e.target.firstElementChild.textContent.toLowerCase());
   choice=document.querySelector(".choiced");
    if(choice!==null){
    submit.removeAttribute('disabled')
     submit.addEventListener('click',()=>{
      if(ans===data[num].ans){
       let eles=document.querySelectorAll('.choice');
       eles[0].classList.remove('corect');
       eles[1].classList.remove('corect');
       eles[2].classList.remove('corect');
       eles[3].classList.remove('corect');
       choice.classList.add('corect');
       submit.setAttribute('disabled','')
       document.removeEventListener('click',content)
      }else {
       let eles=document.querySelectorAll('.choice');
        eles[0].classList.remove('wrong');
       eles[1].classList.remove('wrong');
       eles[2].classList.remove('wrong');
       eles[3].classList.remove('wrong');
       choice.classList.add('wrong');
       submit.setAttribute('disabled','')
       document.removeEventListener('click',content)


       
      }
     })
   
    }
  }
 })
}
 )
}
CreateQue();
function content(){
 if(e.target.classList.contains("choice")){
  if(choiced==0){
   let eles=document.querySelectorAll('.choice');
   eles[0].classList.remove('choiced');
   eles[1].classList.remove('choiced');
   eles[2].classList.remove('choiced');
   eles[3].classList.remove('choiced');
   e.target.classList.add('choiced')
   
  }
   ans=(e.target.firstElementChild.textContent.toLowerCase());
   choice=document.querySelector(".choiced");
    if(choice!==null){
    submit.removeAttribute('disabled')
     submit.addEventListener('click',()=>{
      if(ans===data[1].ans){
       let eles=document.querySelectorAll('.choice');
       eles[0].classList.remove('corect');
       eles[1].classList.remove('corect');
       eles[2].classList.remove('corect');
       eles[3].classList.remove('corect');
       choice.classList.add('corect');
       submit.setAttribute('disabled','')
      }else {
       let eles=document.querySelectorAll('.choice');
        eles[0].classList.remove('wrong');
       eles[1].classList.remove('wrong');
       eles[2].classList.remove('wrong');
       eles[3].classList.remove('wrong');
       choice.classList.add('wrong');
       submit.setAttribute('disabled','')

       
      }
     })
   
    }
  }
}
