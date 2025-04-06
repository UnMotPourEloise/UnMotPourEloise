const words = [
  { word: "abnégation", definition: "selflessness, putting others' needs before one's own" },
  { word: "abominable", definition: "horrible, dreadful" },
  { word: "acariâtre", definition: "irritable, grumpy" },
  { word: "acérer", definition: "to sharpen, to make something sharp" },
  { word: "adroit", definition: "skillful, dexterous" },
  { word: "affable", definition: "friendly, approachable" },
  { word: "aggraver", definition: "to worsen, to make worse" },
  { word: "alléguer", definition: "to allege, to claim" },
  { word: "ambigu", definition: "ambiguous, unclear" },
  { word: "animosité", definition: "hostility, bitterness" },
  { word: "apathie", definition: "apathy, lack of feeling or interest" },
  { word: "arrogance", definition: "arrogance, overbearing pride" },
  { word: "assidu", definition: "diligent, hardworking" },
  { word: "atroce", definition: "atrocious, horrible" },
  { word: "audacieux", definition: "audacious, bold" },
  { word: "aversion", definition: "aversion, strong dislike" },
  { word: "banal", definition: "banal, commonplace" },
  { word: "bienveillance", definition: "benevolence, kindness" },
  { word: "blâme", definition: "blame, censure" },
  { word: "camaraderie", definition: "camaraderie, friendship among people" },
  { word: "candide", definition: "naive, innocent" },
  { word: "capricieux", definition: "capricious, unpredictable" },
  { word: "censure", definition: "censorship, criticism" },
  { word: "chicaner", definition: "to quarrel over small details, nitpick" },
  { word: "clairvoyant", definition: "clairvoyant, able to see the future" },
  { word: "complot", definition: "plot, conspiracy" },
  { word: "concomitant", definition: "concomitant, accompanying" },
  { word: "conjecture", definition: "conjecture, hypothesis" },
  { word: "consternation", definition: "dismay, astonishment" },
  { word: "convivial", definition: "sociable, friendly" },
  { word: "courageux", definition: "courageous, brave" },
  { word: "déceler", definition: "to detect, to notice" },
  { word: "défaitiste", definition: "defeatist, pessimistic" },
  { word: "délectable", definition: "delightful, very pleasing" },
  { word: "dévotion", definition: "devotion, loyalty and affection" },
  { word: "diffident", definition: "diffident, shy or lacking confidence" },
  { word: "diligent", definition: "diligent, hardworking" },
  { word: "dissonance", definition: "dissonance, lack of harmony" },
  { word: "dominer", definition: "to dominate, to control" },
  { word: "égard", definition: "consideration, respect" },
  { word: "éluder", definition: "to evade, to avoid" },
  { word: "embellir", definition: "to embellish, to beautify" },
  { word: "emblématique", definition: "emblematic, representative" },
  { word: "émouvant", definition: "moving, touching" },
  { word: "engouement", definition: "enthusiasm, fervor" },
  { word: "énigmatique", definition: "enigmatic, mysterious" },
  { word: "énoncer", definition: "to state, to announce" },
  { word: "épuisant", definition: "exhausting, tiring" },
  { word: "erroné", definition: "erroneous, wrong" },
  { word: "exaspérer", definition: "to exasperate, to irritate" },
  { word: "exubérant", definition: "exuberant, full of energy" },
  { word: "facétieux", definition: "facetious, playful" },
  { word: "flegmatique", definition: "phlegmatic, calm and unemotional" },
  { word: "futile", definition: "futile, unimportant" },
  { word: "galanterie", definition: "gallantry, courteous behavior" },
  { word: "gracieux", definition: "gracious, elegant" },
  { word: "guilleret", definition: "cheerful, lively" },
  { word: "harasser", definition: "to exhaust, to wear out" },
  { word: "hésiter", definition: "to hesitate, to be unsure" },
  { word: "impertinent", definition: "impertinent, rude" },
  { word: "indolent", definition: "indolent, lazy" },
  { word: "inexorable", definition: "inexorable, unstoppable" },
  { word: "inique", definition: "unjust, unfair" },
  { word: "intempestif", definition: "untimely, inconvenient" },
  { word: "irascible", definition: "irascible, easily angered" },
  { word: "laconique", definition: "laconic, brief and concise" },
  { word: "languir", definition: "to languish, to weaken" },
  { word: "louche", definition: "suspicious, shady" },
  { word: "magnanime", definition: "magnanimous, generous and forgiving" },
  { word: "misanthrope", definition: "misanthrope, one who dislikes people" },
  { word: "morose", definition: "morose, gloomy" },
  { word: "naufrage", definition: "shipwreck, disaster" },
  { word: "obstiné", definition: "stubborn, determined" },
  { word: "obvier", definition: "to avoid, to prevent" },
  { word: "outrancier", definition: "outrageous, extreme" },
  { word: "palpable", definition: "palpable, easily noticeable" },
  { word: "paradoxal", definition: "paradoxical, contradictory" },
  { word: "pérennité", definition: "perpetuity, lasting quality" },
  { word: "pugnace", definition: "pugnacious, combative" },
  { word: "quand même", definition: "anyway, still" },
  { word: "récalcitrant", definition: "recalcitrant, resistant to authority" },
  { word: "réfléchi", definition: "thoughtful, reflective" },
  { word: "réfractaire", definition: "refractory, resistant to authority" },
  { word: "reluisant", definition: "shiny, gleaming" },
  { word: "résilience", definition: "resilience, ability to recover from adversity" },
  { word: "sagacité", definition: "sagacity, wisdom" },
  { word: "séraphique", definition: "seraphic, angelic" },
  { word: "spontané", definition: "spontaneous, without premeditation" },
  { word: "susceptible", definition: "sensitive, easily offended" },
  { word: "taciturne", definition: "taciturn, reserved in speech" },
  { word: "truculent", definition: "truculent, aggressive and combative" },
  { word: "tumultueux", definition: "tumultuous, noisy and chaotic" },
  { word: "ubiquité", definition: "ubiquity, presence everywhere" },
  { word: "vénérer", definition: "to venerate, to worship" },
  { word: "verbeux", definition: "verbose, wordy" },
  { word: "virulent", definition: "virulent, extremely harmful" },
  { word: "zélé", definition: "zealous, enthusiastic" }
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


