const words = [
  { word: "une carrière", definition: "a career" },
  { word: "une galère", definition: "slang for a difficult situation" },
  { word: "une pause", definition: "a break" },
  { word: "attacher", definition: "to tie" },
  { word: "être affamé", definition: "to starve" },
  { word: "un cadre", definition: "a frame" },
  { word: "daffodil", definition: "jonquille" },
  { word: "c'est carré", definition: "slang for that's okay/ all good" },
  { word: "bouffer", definition: "slang, to eat" },
  { word: "un bordel", definition: "a mess" },
  { word: "tirer", definition: "to pull" },
  { word: "pinard", definition: "slang for wine" },
  { word: "une patinoire", definition: "a skating rink" },
  { word: "une baraque", definition: "slang for a house" },
  { word: "une grande roue", definition: "a ferris wheel (like the london eye)" },
  { word: "un lacet", definition: "a shoelace" },
  { word: "le plafond", definition: "the ceiling" },
  { word: "I love you with literally", definition: "everything I have Eloise" },
  { word: "une grande surface", definition: "a supermarket" },
  { word: "un vaccin", definition: "a vaccine" },
  { word: "un mytho", definition: "slang, a liar" },
  { word: "une pédale", definition: "literally a pedal but used as an homophobic insult mainly for gay men" },
  { word: "les poulets", definition: "slang for police" },
  { word: "une balance", definition: "a snitch" },
  { word: "cavaler", definition: "slang for running" },
  { word: "un dessous de verre", definition: "a coaster" },
  { word: "un bouffon/ une bouffone", definition: "a jester, used as an insult (also used for the bishop in chess)" },
  { word: "une friteuse", definition: "a fryer" },
  { word: "reun", definition: "charentais, rien" },
  { word: "thune", definition: "slang for money" },
  { word: "des godasse", definition: "slang for shoes" },
  { word: "des fringues", definition: "clothes" },
  

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


