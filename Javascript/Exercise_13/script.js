function helloWorld(lan) {
    if (lan === "es") {
        return "¡Hola, Mundo!";
    } else if (lan === "de") {
        return "Hallo, Welt!";
    } else if (lan === "en") {
        return "Hello, World";
    }
    else {
        return "Language not supported";
    }
}

const userInput = prompt("Enter language code (e.g., 'en' for English, 'es' for Spanish, 'de' for German):");

alert(helloWorld(userInput));