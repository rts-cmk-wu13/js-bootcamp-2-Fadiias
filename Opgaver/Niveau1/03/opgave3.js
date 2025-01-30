function skjulElementViaCssSelector(cssSelector) {
    const element = document.querySelector(cssSelector);
    skjulElement(element);
}

function skjulElement(element) {
    if (element !== null) {
        element.style.display = "NONE"; 
       /*  element.style.display = "NULL";  */ /*  <--- denne linje giver fejl, da NULL ikke er en valid værdi for display */
    }
}

skjulElementViaCssSelector(".produkt .koebKnap"); 
skjulElementViaCssSelector(".profil img"); 