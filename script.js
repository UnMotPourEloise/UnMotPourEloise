const words = [
 
 { word: "un trajet", definition: "an itinerary" },
 { word: "un pion", definition: "the little object used to play a board game" },
 { word: "une tartine", definition: "a toast" },
 { word: "affirmer", definition: "to assert / to state confidently" },
 { word: "aggraver", definition: "to worsen" },
 { word: "apercevoir", definition: "to catch sight of" },
 { word: "approuver", definition: "to approve" },
 { word: "atteindre", definition: "to reach / to achieve" },
 { word: "bénéficier", definition: "to benefit" },
 { word: "démontrer", definition: "to demonstrate / to prove" },
 { word: "diminuer", definition: "to decrease" },
 { word: "échapper", definition: "to escape" },
 { word: "embaucher", definition: "to hire" },
 { word: "économiser", definition: "to save (money/time)" },
 { word: "exiger", definition: "to demand / to require" },
 { word: "favoriser", definition: "to promote / to favor" },
 { word: "gérer", definition: "to manage" },
 { word: "négliger", definition: "to neglect" },
 { word: "paraître", definition: "to seem / to appear" },
 { word: "accentuer", definition: "to emphasize / to intensify" },
 { word: "anticiper", definition: "to anticipate" },
 { word: "un compromis", definition: "a compromise" },
 { word: "une conviction", definition: "belief / conviction" },
 { word: "une crainte", definition: "a fear" },
 { word: "un désaccord", definition: "a disagreement" },
 { word: "détruire", definition: "to destroy" },
 { word: "une durée", definition: "a duration" },
 { word: "un enjeu", definition: "a stake / issue" },
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


