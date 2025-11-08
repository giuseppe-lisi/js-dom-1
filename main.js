let lightOn = "img/lightbulb_on.png";
let lightOff = "img/lightbulb_off.png";
let lightbulb = document.getElementById("lightbulb");
let lightSwitch = document.getElementById("lightSwitch");

function turnLightOnOrOff() {
    if (lightbulb.getAttribute("src") == lightOn) {
        lightbulb.src = lightOff;
        lightSwitch.innerHTML = "Accendi";
    } else {
        lightbulb.src = lightOn;
        lightSwitch.innerHTML = "Spegni";
    }
}

lightSwitch.addEventListener("click", turnLightOnOrOff);