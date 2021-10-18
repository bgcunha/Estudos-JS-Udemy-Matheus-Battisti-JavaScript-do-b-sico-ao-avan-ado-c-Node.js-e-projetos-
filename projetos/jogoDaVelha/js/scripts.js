let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
messageContainer = document.querySelector("#message");
messageText = document.querySelector("#message p");
let secondPlayer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Add evento click nos box
for(let i = 0; i < boxes.length; i++)
{
    boxes[i].addEventListener("click", function(){
        
        let el = checkEl (player1, player2);
       
        if(this.childNodes.length == 1){

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);
            //Computar Jogada
            if(player1 == player2){
                player1++;

                if(secondPlayer == "ai-player"){
                    //Executar jogada IA  
                    setTimeout(function () {                      
                        computerPlay();                        
                    }, 250);
                    
                    
                    player2++;
                }
            }else{
                player2++;
            }

            checkWinCondition();
        }
    });
}

//Evento botão
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        
        secondPlayer = this.getAttribute("id");
        
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';               
        }

        setTimeout( function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 200);           
        
    });
    
}

function checkEl (player1, player2) {
    if(player1 == player2){
        //x
        el = x;       
    }
    else{
        //o
        el = o;       
    } 
    
    return el;
}

function checkWinCondition() {

   let b1 = document.getElementById("block-1");
   let b2 = document.getElementById("block-2");
   let b3 = document.getElementById("block-3");
   let b4 = document.getElementById("block-4");
   let b5 = document.getElementById("block-5");
   let b6 = document.getElementById("block-6");
   let b7 = document.getElementById("block-7");
   let b8 = document.getElementById("block-8");
   let b9 = document.getElementById("block-9");
  
   //debugger;
   //Horizontal
   if(b1.childNodes.length > 1 && b2.childNodes.length > 1 && b3.childNodes.length > 1 )
   {
        let b1Child = b1.childNodes[1].className;
        let b2Child = b2.childNodes[1].className;
        let b3Child = b3.childNodes[1].className;        

        if(b1Child == b2Child && b2Child == b3Child){
            //venceu
            declareWinner(b1Child);
        }
    }
    if(b4.childNodes.length > 1 && b5.childNodes.length > 1 && b6.childNodes.length > 1 )
    {        
        let b4Child = b4.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b6Child = b6.childNodes[1].className;        

        if(b4Child == b5Child && b5Child == b6Child){
            //venceu
            declareWinner(b4Child);
        }
    }
    if(b7.childNodes.length > 1 && b8.childNodes.length > 1 && b9.childNodes.length > 1 )
    {        
        let b7Child = b7.childNodes[1].className;
        let b8Child = b8.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;        
    
        if(b7Child == b8Child && b8Child == b9Child){
            //venceu
            declareWinner(b7Child);
        }
    }
    //Vertical
    if(b1.childNodes.length > 1 && b4.childNodes.length > 1 && b7.childNodes.length > 1 )
    {
        let b1Child = b1.childNodes[1].className;
        let b4Child = b4.childNodes[1].className;
        let b7Child = b7.childNodes[1].className;        

        if(b1Child == b4Child && b4Child == b7Child){
            //venceu
            declareWinner(b1Child);
        }
    }
    if(b2.childNodes.length > 1 && b5.childNodes.length > 1 && b8.childNodes.length > 1 )
    {
        let b2Child = b2.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b8Child = b8.childNodes[1].className;        

        if(b2Child == b5Child && b5Child == b8Child){
            //venceu
            declareWinner(b2Child);
        }
    }
    if(b3.childNodes.length > 1 && b6.childNodes.length > 1 && b9.childNodes.length > 1 )
    {
        let b3Child = b3.childNodes[1].className;
        let b6Child = b6.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;        

        if(b3Child == b6Child && b6Child == b9Child){
            //venceu
            declareWinner(b3Child);
        }
    }
    //Diagonal
    if(b1.childNodes.length > 1 && b5.childNodes.length > 1 && b9.childNodes.length > 1 )
    {
        let b1Child = b1.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b9Child = b9.childNodes[1].className;        

        if(b1Child == b5Child && b5Child == b9Child){
            //venceu
            declareWinner(b1Child);
        }
    }
    if(b3.childNodes.length > 1 && b5.childNodes.length > 1 && b7.childNodes.length > 1 )
    {
        let b3Child = b3.childNodes[1].className;
        let b5Child = b5.childNodes[1].className;
        let b7Child = b7.childNodes[1].className;        

        if(b3Child == b5Child && b5Child == b7Child){
            //venceu
            declareWinner(b3Child);
        }
    }
    //Velha
    let counter = 0;
    for (let index = 0; index < boxes.length; index++) {
        if(boxes[index].childNodes[1]  != undefined){
            counter++;
        }
    }

    if(counter == 9)
        declareWinner('Deu Velha');

}

function declareWinner(winner) {
    
    let scoreBoardx = document.querySelector("#scoreboard-1");
    let scoreBoardo = document.querySelector("#scoreboard-2");
    let msg='';

    if(winner == 'x'){
        msg = 'O Jogador 1 Venceu!';
        scoreBoardx.textContent = parseInt(scoreBoardx.textContent) + 1;

    }else if(winner == 'o'){
        msg = 'O Jogador 2 Venceu!';
        scoreBoardo.textContent = parseInt(scoreBoardo.textContent) + 1;
    }else
    {
        msg = 'Deu Velha!';
    }
    //exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    //
    setTimeout( function () {
        messageContainer.classList.add('hide');            
    }, 3000);
    
    player1 = 0;
    player2 = 0;    

    let boxesToRemove = document.querySelectorAll('.box div');

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);       
    }
}

function computerPlay() {
    
    let cloneO = o.cloneNode(true);
    counter=0;
    filled=0;

    for (let i = 0; i < boxes.length; i++) {
        let randon = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[1]  == undefined){
            if(randon  <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }               
        }
        else{
            filled++;
        }            
    }

    if(counter == 0 && filled < 9)
        computerPlay();
}