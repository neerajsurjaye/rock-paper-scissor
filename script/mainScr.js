function computerPlay(){
    return Math.round(Math.random() * 2);
}

function play(playerSelection , computerSelection){
    var message = "";
    if(playerSelection == 0){
        if(computerSelection == 0){
            message = "draw";
        }
        else if(computerSelection == 1){
            message = "lost";
        }
        else if(computerSelection == 2){
            message = "won";
        }
    }

    else if(playerSelection == 1){
        if(computerSelection == 0){
            message = "won";
        }
        else if(computerSelection == 1){
            message = "draw";
        }
        else if(computerSelection == 2){
            message = "lost";
        }
    }

    else if(playerSelection == 2){
        if(computerSelection == 0){
            message = "lost";
        }
        else if(computerSelection == 1){
            message = "won";
        }
        else if(computerSelection == 2){
            message = "draw";
        }
    }
    return message;
}   

const statusText = document.querySelector("#statusText");


function updateStatus(message){
    statusText.textContent = message;
}

const compPly = document.querySelector("#compPly");

function updateImage(message){
    console.log(message);

    if(message == 0){

        compPly.src = "./images/paper.jpg";
    }
    if(message == 1){
        
        compPly.src =  "./images/scissor.jpg";
    }
    if(message == 2){
        
        compPly.src = "./images/kisspng-graphic-design-rock-vector-5adccbaae5dac7.5970431315244194989415.jpg";
    }
}

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click" , () => {
    var comp  = computerPlay();
    var message = (play(1 , comp));
    console.log(message);
    updateStatus(message);
    updateImage(comp);
})

const paper = document.querySelector("#paper");
paper.addEventListener("click" , () => {
    var comp  = computerPlay();
    var message = (play(0 , comp));
    console.log(message);
    updateStatus(message);
    updateImage(comp);
})

const rock = document.querySelector("#rock");
rock.addEventListener("click" , () => {
    var comp  = computerPlay();
    var message = (play(2 , comp));
    updateStatus(message);
    updateImage(comp);
})