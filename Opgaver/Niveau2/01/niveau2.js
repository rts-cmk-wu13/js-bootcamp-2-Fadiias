// Funktion til at skjule et element via en CSS-selector
function skjulElementViaCssSelector(cssSelector) {
    const element = document.querySelector(cssSelector);
    if (element) {
        element.style.display = "none";
    }
}

// Ekstraopgave 1: Funktion til at skjule et element direkte
function skjulElement(element) {
    if (element !== null) {
        element.style.display = "none";
    }
}

// Opdateret funktion til at bruge skjulElement
function skjulElementViaCssSelector(cssSelector) {
    const element = document.querySelector(cssSelector);
    skjulElement(element);
}

// Ekstraopgave 2: Funktion til at skjule flere elementer via en CSS-selector
function skjulElementerViaCssSelector(cssSelector) {
    const elements = document.querySelectorAll(cssSelector);
    elements.forEach(element => {
        skjulElement(element);
    });
}

// Eksempler på brug
// Test med enkelt element
skjulElementViaCssSelector(".produkt .koebKnap");
skjulElementViaCssSelector(".profil img");

// Test med flere elementer
skjulElementerViaCssSelector(".produkt img");

// Funktion til at håndtere knaptryk
function setupButtonToggle() {
    const buttonContainer = document.getElementById("buttons");
    buttonContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            document.querySelectorAll("#buttons button").forEach(button => {
                button.classList.remove("active");
                button.style.backgroundColor = "rgb(255, 255, 255)"; // Nulstil farven
            });
            event.target.classList.add("active");
            event.target.style.backgroundColor = "rgb(11, 215, 0)";
        }
    });
}

// Initialiser funktionalitet ved indlæsning
setupButtonToggle();
