const words = [
  { word: "arrogance", definition: "arrogance, overbearing pride" },
  { word: "assidu", definition: "diligent, hardworking" },
  { word: "Bagnole", definition: "(slang) Car" },
  { word: "atroce", definition: "atrocious, horrible" },
  { word: "Vachement", definition: "(slang) Really, a lot" },
  { word: "audacieux", definition: "audacious, bold" },
  { word: "Grave", definition: "(slang) Seriously, really" },
  { word: "aversion", definition: "aversion, strong dislike" },
  { word: "Chaud", definition: "(slang) Difficult, risky, or intense" },
  { word: "banal", definition: "banal, commonplace" },
  { word: "Barge", definition: "(slang) Crazy, insane" },
  { word: "bienveillance", definition: "benevolence, kindness" },
  { word: "Vénère", definition: "(slang) Angry or annoyed" },
  { word: "blâme", definition: "blame, censure" },
  { word: "Relou", definition: "(slang) Annoying, boring" },
  { word: "camaraderie", definition: "camaraderie, friendship among people" },
  { word: "Flasher", definition: "(slang) To have a crush on someone" },
  { word: "candide", definition: "naive, innocent" },
  { word: "Taf", definition: "(slang) Work, job" },
  { word: "capricieux", definition: "capricious, unpredictable" },
  { word: "Déconner", definition: "(slang) To mess around, to joke" },
  { word: "censure", definition: "censorship, criticism" },
  { word: "Baiser", definition: "(slang) To have sex" },
  { word: "chicaner", definition: "to quarrel over small details, nitpick" },
  { word: "Chier", definition: "(slang) To defecate, or to express frustration" },
  { word: "Piger", definition: "(slang) To understand, to get it" },
  { word: "complot", definition: "plot, conspiracy" },
  { word: "Blé", definition: "(slang) Money" },
  { word: "Bordel", definition: "(slang) Mess, chaos, or disorder" },
  { word: "consternation", definition: "dismay, astonishment" },
  { word: "Tocard", definition: "(slang) Loser, idiot" },
  { word: "convivial", definition: "sociable, friendly" },
  { word: "courageux", definition: "courageous, brave" },
  { word: "déceler", definition: "to detect, to notice" },
  { word: "défaitiste", definition: "defeatist, pessimistic" },
  { word: "délectable", definition: "delightful, very pleasing" },
  { word: "dévotion", definition: "devotion, loyalty and affection" },
  { word: "Gosse", definition: "(slang) Kid, child" },
  { word: "diligent", definition: "diligent, hardworking" },
  { word: "dissonance", definition: "dissonance, lack of harmony" },
  { word: "Nana", definition: "(slang) Girl, woman" },
  { word: "dominer", definition: "to dominate, to control" },
  { word: "Fric", definition: "(slang) Money" },
  { word: "embellir", definition: "to embellish, to beautify" },
  { word: "Choper", definition: "(slang) To catch, to grab, to get something, or to hook someone" },
  { word: "emblématique", definition: "emblematic, representative" },
  { word: "émouvant", definition: "moving, touching" },
  { word: "Flinguer", definition: "(slang) To shoot, to kill" },
  { word: "engouement", definition: "enthusiasm, fervor" },
  { word: "S’embrouiller", definition: "(slang) To get confused, to argue" },
  { word: "énigmatique", definition: "enigmatic, mysterious" },
  { word: "Glander", definition: "(slang) To laze around, to waste time" },
  { word: "énoncer", definition: "to state, to announce" },
  { word: "épuisant", definition: "exhausting, tiring" },
  { word: "Péter un câble", definition: "(slang) To lose it, to freak out" },
  { word: "erroné", definition: "erroneous, wrong" },
  { word: "exaspérer", definition: "to exasperate, to irritate" },
  { word: "exubérant", definition: "exuberant, full of energy" },
  { word: "Pétard", definition: "(slang) Firecracker, or something intense" },
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
  { word: "spontané", definition: "spontaneous, without premeditation" },
  { word: "susceptible", definition: "sensitive, easily offended" },
  { word: "taciturne", definition: "taciturn, reserved in speech" },
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
  { word: "Kiffer", definition: "(slang) To like, to enjoy" },
  { word: "Ouf", definition: "(slang) Crazy, awesome" },
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


