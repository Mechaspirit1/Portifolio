//Efeito visual de escrita do titulo

const titleSel = document.querySelector("#title")

let titleText = "Hello, i am Pablo...";
let title = titleSel.textContent;
let i = 0;
let state = true;

console.log(title);

function typew(){
    if (state){ //efeito de escrita
        if (i<titleText.length){
            titleSel.textContent += titleText.charAt(i);
            i++
            setTimeout(typew, 100);
        }
        else{
            state = false;
            setTimeout(typew, 600);
        }
    }
    else{ //efeito de delete
        if (i > 0) {
            titleSel.textContent = titleText.substring(0, i - 1);
            i--;
            setTimeout(typew, 50);
        } 
        else {
            state = true;
            setTimeout(typew, 1000); //pausa antes de escrever o titulo novamente
        }
    }
}

typew();
