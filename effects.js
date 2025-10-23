//Efeito visual de escrita do titulo

const titleSel = document.querySelector("#title")

let titleText = "Hello, i am Pablo...";
let title = titleSel.textContent;
let i = 0;

console.log(title);

function typew(){
    if (i<titleText.length){
        titleSel.textContent += titleText.charAt(i);
        i++
        setTimeout(typew, 100);
    }
}

typew();
