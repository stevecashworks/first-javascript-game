
var cardsChosen= [];
var chosenId=[];
var scoreBoard= document.querySelector('#scoreBoard')
var score=0;
var isGameOver;
var result= document.querySelector('.result') 
scoreBoard.textContent= score;
var triesLeft= document.querySelector('#tries')
var tries=prompt('select  your number of tries please note that you need at least 6 tries');
while(tries<6){ tries= prompt('please select a number not less than 6') }
triesLeft.textContent= tries;
const gridBoard= document.querySelector('.grid')//the whole grid
var gridBlank= 'src/images/gridBlank.jpg'; // this variable is used when i want the grid to be blank
const cards=[ {Name: 'keyBoard',// all my cards images goes into this array
src: 'src/images/keyboard.jpg'},
{Name: 'mkeyBoard',
src: 'src/images/mkeyboard.jpg'},
{Name: 'mouse',
src: 'src/images/mouse.jpg'},
{Name: 'mouse2',
src: 'src/images/mouse2.jpg'},
{Name: 'monitor',
src: 'src/images/monitor.jpg'},
{Name: 'monitorl',
src: 'src/images/monitorl.jpg'},
{Name: 'keyBoard',
src: 'src/images/keyboard.jpg'},
{Name: 'mkeyBoard',
src: 'src/images/mkeyboard.jpg'},
{Name: 'mouse',
src: 'src/images/mouse.jpg'},
{Name: 'mouse2',
src: 'src/images/mouse2.jpg'},
{Name: 'monitor',
src: 'src/images/monitor.jpg'},
{Name: 'monitorl',
src: 'src/images/monitorl.jpg'}
]
cards.sort(()=>0.5- Math.random());
console.log(cards);
function flipOver(){ 
    var dataId= this.getAttribute('data-id');
    var chosenName= cards[dataId].Name;
    cardsChosen.push(chosenName);
    console.log(cardsChosen);
    this.setAttribute('src',cards[dataId].src)
    chosenId.push(dataId);
    console.log(chosenId);
    if(chosenId.length===2){setTimeout(checkMatch, 500)}
}
function createBoard(){
    for(i=0; i<12;i++){
        var image=document.createElement('img');
        image.setAttribute('src',gridBlank);
        image.setAttribute('data-id',i);
        image.addEventListener('click', flipOver)
        gridBoard.appendChild(image)

        
    }
    
    
}
createBoard()
var img= document.querySelectorAll('img')
function checkMatch(){if(chosenId[0]===chosenId[1]){ chosenId.pop();
    chosenId.pop;
    cardsChosen.pop();
    cardsChosen.pop();
    alert('you already clicked this')
    img[chosenId[0]].setAttribute('src', gridBlank)
if(tries>0){tries--; triesLeft.textContent=tries;}

}
else if(cardsChosen[0]===cardsChosen[1]){ 
alert(" congrats, youve found a match!");
img[chosenId[0]].setAttribute('src','src/images/white.jpg');
img[chosenId[1]].setAttribute('src','src/images/white.jpg');
chosenId.pop();
chosenId.pop();
cardsChosen.pop();
cardsChosen.pop();
score++; if (score===cards.length/2){result.style.display='flex';}
scoreBoard.innerHTML=score;
if(tries>0){tries--; triesLeft.textContent=tries;}


}
else{ alert('try again!') 
img[chosenId[0]].setAttribute('src','src/images/gridBlank.jpg');
img[chosenId[1]].setAttribute('src','src/images/gridBlank.jpg');
    chosenId.pop();
    chosenId.pop();
    cardsChosen.pop();
    cardsChosen.pop();
if(tries>0){tries--; triesLeft.textContent=tries;}


}
if(tries===0&&score<6){ result.innerHTML= 'Sorry, you lost!'
result.style.display='flex';
var button= document.querySelector('button')
button.style.display='flex';
var image= document.querySelectorAll('img')


}
}
function startGame(){location.reload();}