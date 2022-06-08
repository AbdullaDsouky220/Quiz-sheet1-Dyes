let trueContainer=document.getElementById('true');
let wrongContainer=document.getElementById('wrong');
let question=document.querySelector('.qui-content');
let questionNum=document.querySelector('.qui-num');
let Cho1=document.querySelector(".choise1");
let Cho2=document.querySelector(".choise2");
let Cho3=document.querySelector(".choise3");
let Cho4=document.querySelector(".choise4");
let submit=document.querySelector(".submit");
let change=document.querySelector(".next");
let count=0;
let WrongCount=1;
let num=1;
let wrong=0;
let right=0;
function createpop(right,wrong){
 let pop=document.createElement('div');
 pop.classList.add('pop')
 pop.innerHTML=`
 <p>Congratulation!!</p>
 <p>You Answerd ${right} right</p>
 <p>You Answerd ${wrong} Wrong</p>
 <button class="ok">ok</button>
 `;
 document.body.appendChild(pop)
}
change.addEventListener('click',()=>{
 num=Math.floor(Math.random()*35)+1;
 let eles=document.querySelectorAll('.choice');
       eles[0].classList.remove('corect');
       eles[1].classList.remove('corect');
       eles[2].classList.remove('corect');
       eles[3].classList.remove('corect');
       eles[0].classList.remove('choiced');
   eles[1].classList.remove('choiced');
   eles[2].classList.remove('choiced');
   eles[3].classList.remove('choiced');
   eles[0].classList.remove('wrong','rightOne','wrongOne');
   eles[1].classList.remove('wrong','rightOne','wrongOne');
   eles[2].classList.remove('wrong','rightOne','wrongOne');
   eles[3].classList.remove('wrong','rightOne','wrongOne');
   let result=(WrongCount+count)-1;
   if(result==2){

      
    document.querySelector('.container').style.filter="blur(1px)";
    createpop(trueContainer.textContent,wrongContainer.textContent);
    let ok=document.querySelector('.ok');
    ok.addEventListener('click',()=>{
     let pop=document.querySelector('.pop')
     document.body.removeChild(pop)
     document.querySelector('.container').style.filter="blur(0px)";
     trueContainer.innerText=0;
     wrongContainer.innerText=0;
     WrongCount=0;
     count=0;

    })
   }
   CreateQue();
   let choice=document.querySelector(".choiced");
 



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
       
       
       
       if(choice.classList.contains('rightOne')===false)
       {
        if(document.querySelector('.wrong')===null){
        choice.classList.add('rightOne')
        count+=1;
        trueContainer.innerText=count;
       }}
       choice.classList.add('rightOne')
       submit.setAttribute('disabled','');

      
       document.removeEventListener('click',content)
      }else {
       let eles=document.querySelectorAll('.choice');
        eles[0].classList.remove('wrong');
       eles[1].classList.remove('wrong');
       eles[2].classList.remove('wrong');
       eles[3].classList.remove('wrong');
       choice.classList.add('wrong');
       submit.setAttribute('disabled','')
       if(document.querySelector('.wrongOne')===null)
       {
        if(document.querySelector('.corect')===null){
         console.log(trueContainer.innerText)
         choice.classList.add('wrongOne')
         wrongContainer.innerText=WrongCount;
         WrongCount++;
        }
       }
       choice.classList.add('wrongOne')
       document.removeEventListener('click',content)


       
      }
     
     
     })
   
    }
  }
 },
)
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
