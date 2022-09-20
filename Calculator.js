let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

console.log(buttons)


buttons.map(button => {

    button.addEventListener('click', (e) => {
        const string = e.target.innerText.toString().toLowerCase();
        switch (string) {
            case "c":
                display.innerText = "";
                break;        
            case "←":
                display.innerText = display.innerText.slice(0,-1);
                break;        
            case "=":
                display.innerText = eval(display.innerText);
                break;        
            default:
                display.innerText += string;
                break;
        }
    });


});