console.log("hallo wereld!");

/* Bron: Kevin Powell - "How to create a progress bar with animations"
   https://www.youtube.com/watch?v=kjhsS4lNZ9o
   Geraadpleegd op 8 mei 2026 */
function updateProgressbarWater (progressBarWater, value) {
    value = Math.round(value);
    progressBarWater.querySelector(".progresswater_fill").style.width = `${value}%`; 
    progressBarWater.querySelector(".progresswater_text").textContent = `${value}%`;
}

const progressWater = document.querySelector(".progresswater");

/* Bron: Kevin Powell - "How to create a progress bar with animations"
   https://www.youtube.com/watch?v=kjhsS4lNZ9o
   Geraadpleegd op 8 mei 2026 */
function updateProgressbarOxygen (progressBarOxygen, value) {
    value = Math.round(value);
    progressBarOxygen.querySelector(".progressoxygen_fill").style.width = `${value}%`; 
    progressBarOxygen.querySelector(".progressoxygen_text").textContent = `${value}%`;
}

const progressOxygen = document.querySelector(".progressoxygen");

/* Bron: Kevin Powell - "How to create a progress bar with animations"
   https://www.youtube.com/watch?v=kjhsS4lNZ9o
   Geraadpleegd op 8 mei 2026 */
function updateProgressbarSun (progressBarSun, value) {
    value = Math.round(value);
    progressBarSun.querySelector(".progresssun_fill").style.width = `${value}%`; 
    progressBarSun.querySelector(".progresssun_text").textContent = `${value}%`;
}

const progressSun = document.querySelector(".progresssun");

/* Bron functies hieronder: Kevin Powell - "How to create a progress bar with animations"
   https://www.youtube.com/watch?v=kjhsS4lNZ9o
   Geraadpleegd op 8 mei 2026 */
updateProgressbarWater(progressWater, 0);
updateProgressbarOxygen(progressOxygen, 0);
updateProgressbarSun(progressSun, 0);

/* Bron van bijna alle code hieronder: docent Inleiding Programmeren - heeft mij bij sommige delen code geholpen of tips gegeven: met de functies van giveWater, giveOxygen en giveSun. Ook valueWater, valueOxygen en valueSun horen hierbij. 
Daarnaast hebben we samen ook de const buttonWater, buttonOxygen en buttonSun aangemaakt met de querySelector. Ook heb ik met hulp de img met id 'mossy_zero' opgevraagd. Ik heb bij alle code hieronder zelf de code geschreven. */
let valueWater = 0;
let valueOxygen = 0;
let valueSun = 0;

const buttonWater = document.querySelector(".buttonwater");
const buttonOxygen = document.querySelector(".buttonoxygen");
const buttonSun = document.querySelector(".buttonsun");

const ecogotchiOrigin = document.getElementById("mossy_zero");
const origineleTekst = document.querySelector("p");

function mossyOrigin() {
    ecogotchiOrigin.src = "/images/mossy.png";
}

/* Bron van functie hieronder: gemaakt met behulp van ChatGPT van OpenAI https://chatgpt.com/ */
function opmerkingMossy() {
    origineleTekst.textContent = "Als je goed voor mij zorgt, kan ik groeien!"
}

function resetprogressBars() {
    valueWater = 0;
    valueOxygen = 0;
    valueSun = 0;

    /* Bron functies hieronder: Kevin Powell - "How to create a progress bar with animations"
   https://www.youtube.com/watch?v=kjhsS4lNZ9o
   Geraadpleegd op 8 mei 2026 */
    updateProgressbarWater(progressWater, valueWater);
    updateProgressbarOxygen(progressOxygen, valueOxygen);
    updateProgressbarSun(progressSun, valueSun);
}



function giveWater() {
    if (valueWater < 100 ) {
        valueWater += 20;
        ecogotchiOrigin.src = "/images/mossy_water.png"; /* hier verandert de image van mossy in een state waarbij mossy teveel water krijgt */
        setTimeout(mossyOrigin, 500); /* met de setTimeout is mossy ongeveer een halve seconde te zien, daarna verandert mossy weer in zijn originele staat */
        if (valueWater == 100 && valueOxygen == 100 && valueSun == 100) {
            ecogotchiOrigin.src = "/images/mossy_evolutie.png"; /* hier verandert de image van mossy in een evolutie state waarbij mossy groeit in een grotere ecologische tamagotchi */
            origineleTekst.textContent = "Een ecolutie! Ik groei! Dankjewel!"; /* de paragraph tekst krijgt nieuwe content met de opmerking "Een ecolutie! Ik groei! Dankjewel!" */
            setTimeout(mossyOrigin, 3000); /* de setTimeout zorgt voor een delay van 3 seconden op alle drie de functies, zodat de afbeelding, tekst en progressbars in originele staat komen na 3 seconden */
            setTimeout(resetprogressBars, 3000);
            setTimeout(opmerkingMossy, 3000);
        }
    } else {
        ecogotchiOrigin.src = "/images/mossy_teveel_water.png"; /* hier verandert de image van mossy in een state waarbij teveel water wordt gegeven */
        origineleTekst.textContent = "Ik krijg teveel water!"; /* hier verandert de content van de paragraph met nieuwe tekst als opmerking van mossy */
        setTimeout(mossyOrigin, 1000); /* de setTimeout zorgt voor een delay van 3 seconden op alle de functies, de afbeeldingen de tekst in originele staat komen na 1 seconde */
        setTimeout(opmerkingMossy, 1000);
    }
    updateProgressbarWater(progressWater, valueWater); /* Bron: Kevin Powell - "How to create a progress bar with animations" https://www.youtube.com/watch?v=kjhsS4lNZ9o Geraadpleegd op 8 mei 2026 */
}

function giveOxygen() {
    if (valueOxygen < 100 ) {
        valueOxygen += 20;
        ecogotchiOrigin.src = "/images/mossy_zuurstof.png";
        setTimeout(mossyOrigin, 500); /* met de setTimeout is mossy ongeveer een halve seconde te zien, daarna verandert mossy weer in zijn originele staat */
        if (valueWater == 100 && valueOxygen == 100 && valueSun == 100) {
            ecogotchiOrigin.src = "/images/mossy_evolutie.png"; /* hier verandert de image van mossy in een evolutie state waarbij mossy groeit in een grotere ecologische tamagotchi */
            origineleTekst.textContent = "Een ecolutie! Ik groei! Dankjewel!"; /* de paragraph tekst krijgt nieuwe content met de opmerking "Een ecolutie! Ik groei! Dankjewel!" */
            setTimeout(mossyOrigin, 3000); /* de setTimeout zorgt voor een delay van 3 seconden op alle drie de functies, zodat de afbeelding, tekst en progressbars in originele staat komen na 3 seconden */
            setTimeout(resetprogressBars, 3000);
            setTimeout(opmerkingMossy, 3000);
        }
    } else {
        ecogotchiOrigin.src = "/images/mossy_teveel_zuurstof.png"; /* hier verandert de image van mossy in een state waarbij teveel zuurstof wordt gegeven */
        origineleTekst.textContent = "Ik krijg teveel zuurstof!"; /* hier verandert de content van de paragraph met nieuwe tekst als opmerking van mossy */
        setTimeout(mossyOrigin, 1000); /* de setTimeout zorgt voor een delay van 3 seconden op alle de functies, de afbeeldingen de tekst in originele staat komen na 1 seconde */
        setTimeout(opmerkingMossy, 1000);
    }
    updateProgressbarOxygen(progressOxygen, valueOxygen); /* Bron: Kevin Powell - "How to create a progress bar with animations" https://www.youtube.com/watch?v=kjhsS4lNZ9o Geraadpleegd op 8 mei 2026 */
}


function giveSun() {
    if (valueSun < 100 ) {
        valueSun += 20;
        ecogotchiOrigin.src = "/images/mossy_zon.png";
        setTimeout(mossyOrigin, 500);
        if (valueWater == 100 && valueOxygen == 100 && valueSun == 100) {
            ecogotchiOrigin.src = "/images/mossy_evolutie.png"; /* hier verandert de image van mossy in een evolutie state waarbij mossy groeit in een grotere ecologische tamagotchi */
            origineleTekst.textContent = "Een ecolutie! Ik groei! Dankjewel!"; /* de paragraph tekst krijgt nieuwe content met de opmerking "Een ecolutie! Ik groei! Dankjewel!" */
            setTimeout(mossyOrigin, 3000); /* de setTimeout zorgt voor een delay van 3 seconden op alle drie de functies, zodat de afbeelding, tekst en progressbars in originele staat komen na 3 seconden */
            setTimeout(resetprogressBars, 3000);
            setTimeout(opmerkingMossy, 3000);
        }
    } else {
        ecogotchiOrigin.src = "/images/mossy_teveel_zonlicht.png"; /* hier verandert de image van mossy in een state waarbij teveel zonlicht wordt gegeven */
        origineleTekst.textContent = "Ik krijg teveel zonlicht!"; /* hier verandert de content van de paragraph met nieuwe tekst als opmerking van mossy */
        setTimeout(mossyOrigin, 1000); /* de setTimeout zorgt voor een delay van 3 seconden op alle de functies, de afbeeldingen de tekst in originele staat komen na 1 seconde */
        setTimeout(opmerkingMossy, 1000);
    }
    updateProgressbarSun(progressSun, valueSun); /* Bron: Kevin Powell - "How to create a progress bar with animations" https://www.youtube.com/watch?v=kjhsS4lNZ9o Geraadpleegd op 8 mei 2026 */
}


buttonWater.addEventListener("click", giveWater);
buttonOxygen.addEventListener("click", giveOxygen);
buttonSun.addEventListener("click", giveSun);