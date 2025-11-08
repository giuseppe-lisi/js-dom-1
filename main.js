let lightOn = "img/lightbulb_on.png";
let lightOff = "img/lightbulb_off.png";
let lightbulb = document.getElementById("lightbulb");

function lightSwitch() {
    if (lightbulb.getAttribute("src") == lightOn) {
        lightbulb.src = lightOff;
    } else {
        lightbulb.src = lightOn;
    }
}

lightbulb.addEventListener("click", lightSwitch);