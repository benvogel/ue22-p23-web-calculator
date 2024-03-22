// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============



window.addEventListener("load",()=>{
    let buttons = document.querySelectorAll("button")
    const display = document.querySelector(".calculator__display");
    let expression = "";
    let premier_click = true;
    let ecran_zero = false;
    for (let button of buttons){
        button.addEventListener("click",(event)=>{
            const bouton = event.target;
            console.log(bouton.textContent);
            

            if (bouton.textContent === "AC") {
                display.textContent = "0";
                expression = "";
                ecran_zero = false;
                premier_click = true;
            } 
            else if (bouton.textContent === "0" && display.textContent === "0") {premier_click=false;ecran_zero = true;console.log("ecran_zero");console.log(display.textContent);}
            else if (premier_click) {console.log("premier click");display.textContent = bouton.textContent;expression += bouton.textContent;premier_click = false;}
            else if (bouton.textContent === "=") {
                display.textContent = eval(expression);
                expression = "";
                premier_click = true;}

            else if (bouton.textContent === "×"){expression += "*";display.textContent += bouton.textContent;}
            else if (bouton.textContent === "÷"){expression += "/";display.textContent += bouton.textContent;}

            else {

                {if (display.textContent === "0" && !ecran_zero) {
                    display.textContent = "";
                console.log("j'ai effacé le 0");}
                display.textContent += bouton.textContent;
                console.log(display.textContent);
                expression += bouton.textContent;}
            
                console.log(expression)
            }}
            

            

        )
    }})


//
            
//var el = document.getElementById('calculator__display');
//el.textContent = bouton.textContent;
//console.log(document.getElementById('calculator__display').innerHTML);