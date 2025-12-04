const words = [
 
  { word: "un nouveau-né", definition: "a new born" },
  { word: "une pellicule", definition: "a film roll or dandruff" },
  { word: "une usine", definition: "a factory" },
  { word: "un aimant", definition: "a magnet" },
  { word: "un cahier", definition: "a notebook" },
  { word: "un caddie", definition: "a trolley" },
  { word: "une semelle", definition: "the sole of a shoe" },
  { word: "une bouillote", definition: "a water bottle" },
  { word: "une friandise", definition: "a treat" },
  { word: "une cagoule", definition: "a balaclava" },
  { word: "un motard", definition: "a motorbike rider" },
  { word: "teuch", definition: "slang for pussy" },
  { word: "pinard", definition: "slang for wine" },
  { word: "être crevé", definition: "être très fatigué" },
  { word: "une station de ski", definition: "a ski resort" },
  { word: "un kawa", definition: "slanf for café" },
  { word: "un pansement", definition: "a plaster" },
  { word: "une ampoule", definition: "bulb or blister" },
  { word: "une couche", definition: "a nappy (also a layer)" },
  { word: "un cartable", definition: "a school backpack" },
  { word: "boîte à gants", definition: "glove box" },
  { word: "être cloué au lit", definition: "expression for being stuck in bed" },
  { word: "péter", definition: "to fart but also to break something" },
  { word: "une cave", definition: "a basement" },
  { word: "la gencive", definition: "gum" },
  { word: "un courrier", definition: "a letter or mail in general" },
  { word: "un long-courrier", definition: "a long flight" },
  { word: "être physionomiste", definition: "to have a good memory for faces" },
  { word: "un braquage", definition: "a hold up" },
  { word: "tarif", definition: "the cost" },
  { word: "une farce", definition: "a joke, a prank" },
  { word: "une tarte", definition: "slang for a slap" },

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


