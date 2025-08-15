const words = [
  { word: "un gadjo/une gadji", definition: "slang for a man/woman" },
  { word: "un cheun", definition: "Charentais, a dog" },
  { word: "une cagouille", definition: "Charentais, a snail" },
  { word: "une échelle", definition: "a ladder" },
  { word: "un babos", definition: "a hippie" },
  { word: "ken", definition: "verb, slang for having sex" },
  { word: "une pelle", definition: "a shovel" },
  { word: "un tuyau", definition: "a pipe" },
  { word: "un lit superposé", definition: "bunk beds" },
  { word: "du vernis", definition: "nail polish" },
  { word: "un flic/les flics", definition: "slang for police officers" },
  { word: "Citadins", definition: "People living in a city" },
  { word: "Campagnards", definition: "People living in the countryside" },
  { word: "Une Barrière", definition: "a fence" },
  { word: "un saladier", definition: "salad bowl" },
  { word: "un keuf/ les keufs", definition: "slang for police officers" },
  { word: "daron/daronne", definition: "slang for mum and dad" },
  { word: "une fuite", definition: "a leak" },
  { word: "un carnage", definition: "a disaster" },
  { word: "une caisse", definition: "slang for a car" },
  { word: "miettes", definition: "crumbs" },
  { word: "un colis", definition: "a parcel" },
  { word: "un cartable", definition: "a school backpack, mostly used for children" },
  { word: "un tabouret", definition: "a stool" },
  { word: "un emploi", definition: "a job" },
  { word: "un rateau", definition: "a rake" },
  { word: "beuh", definition: "slang for weed" },
  { word: "une boîte de nuit", definition: "a club" },
  { word: "tricher", definition: "to cheat (not in a relationship)" },
  { word: "chialer", definition: "verb, slang for to cry" },
  { word: "carton", definition: "cardboard" },

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


