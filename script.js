const words = [
  { word: "un tremblement de terre", definition: "an earthquake" },
  { word: "un gamin", definition: "a kid or someone immature" },
  { word: "une pichenette", definition: "a flick" },
  { word: "une rat", definition: "slang for stingy" },
  { word: "un babos", definition: "a hippie" },
  { word: "ken", definition: "verb, slang for having sex" },
  { word: "une pelle", definition: "a shovel" },
  { word: "un tuyau", definition: "a pipe" },
  { word: "un lit superposé", definition: "bunk beds" },
  { word: "du vernis", definition: "nail polish" },
  { word: "déjouquer", definition: "slang for waking up early" },
  { word: "un cadavre", definition: "a dead body " },
  { word: "un Ouragan", definition: "a hurricane" },
  { word: "comporter /se comporter", definition: "include/ behave" },
  { word: "connu", definition: "famous/known" },
  { word: "étroit", definition: "narrow" },
  { word: "approfondir", definition: "going deeper into something" },
  { word: "envisager", definition: "to consider" },
  { word: "benèze", definition: "to be comfortable" },
  { word: "un drôle/ une drôlesse", definition: "slang for kids" },
  { word: "Une patate", definition: "slang for a punch" },
  { word: "Une lampe frontale", definition: "a headlamp" },
  


];



function getDailyWord() {
    const currentDate = new Date();
    const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000); 
    const wordOfTheDay = words[dayOfYear % words.length]; 

    return wordOfTheDay;
}


function displayWordOfTheDay() {
    const wordOfTheDay = getDailyWord();
    const wordElement = document.getElementById("word"); 
    const definitionElement = document.getElementById("definition"); 

    wordElement.textContent = wordOfTheDay.word;
    definitionElement.textContent = wordOfTheDay.definition;
}


window.onload = displayWordOfTheDay;


