//modo escuro e claro
//muda as imagens de fundo dependendo do modo de contraste da pagina

const mode = document.querySelector("#modeToggle");
const nav = document.querySelector("#links");
const head = document.querySelector("#head");

let change = true;
const matte = "rgb(27, 27, 27)";

mode.addEventListener("click",()=>{
    change = !change;

    if (change===false){
        mode.textContent = "Light mode";
        links.style.backgroundColor = matte;
        links.style.color = "white";

        document.body.style.backgroundColor = matte;
        document.body.style.color = "white";
        head.style.backgroundImage = "url(images/Background2.jpg)";
    }
    else{
        mode.textContent = "Dark mode";
        links.style.backgroundColor = "white";
        links.style.color = "black";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        head.style.backgroundImage = "url(images/Background.jpg)";
    }
});