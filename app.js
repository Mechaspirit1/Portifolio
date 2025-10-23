//modo escuro e claro

const mode = document.querySelector("#modeToggle");
const nav = document.querySelector("#links");

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
    }
    else{
        mode.textContent = "Dark mode";
        links.style.backgroundColor = "white";
        links.style.color = "black";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});