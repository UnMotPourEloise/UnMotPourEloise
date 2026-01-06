const words = [
 
  { word: "en permanence", definition: "constantly" },
  { word: "une hotte", definition: "cooker hood" },
  { word: "un avertissement", definition: "a warning" },
  { word: "nulle part", definition: "nowhere" },
  { word: "ailleurs", definition: "somewhere else" },
  { word: "une migraine", definition: "a headache" },
  { word: "un régale", definition: "a delight" },
  { word: "réduire", definition: "decrease" },
  { word: "augmenter", definition: "increase" },
  { word: "assumer", definition: "to bear" },
  { word: "avouer", definition: "to admit" },
  { word: "un coffre", definition: "a boot" },
  { word: "divertir", definition: "to entertain" },
  { word: "une moyenne", definition: "an average" },
  { word: "couvrir", definition: "to cover" },
  { word: "une gouttière", definition: "rain gutter" },
  { word: "un affichage", definition: "a display" },
  { word: "du parquet", definition: "wooden floor" },
  { word: "gavé", definition: "very (slang from Bordeaux)" },
  { word: "avoir la dalle", definition: "to be hungry (slang)" },
  { word: "le toit", definition: "the roof" },
  { word: "chialer", definition: "to cry (slang)" },
  { word: "un clebs", definition: "a dog (slang)" },
  { word: "un coureur/ coureuse", definition: "a runner" },
  { word: "un stade", definition: "a stadium" },
  { word: "des halles", definition: "halls" },
  { word: "une manique", definition: "an oven glove" },
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


