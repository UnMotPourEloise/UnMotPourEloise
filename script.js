const words = [
    { word: "Abandonner", definition: "To leave something behind or stop taking care of it." },
    { word: "Accepter", definition: "To agree to receive or admit something." },
    { word: "Aimer", definition: "To feel affection or passion for someone or something." },
    { word: "Apprendre", definition: "To acquire knowledge or skills." },
    { word: "Argent", definition: "A medium of exchange or material wealth." },
    { word: "Attendre", definition: "To stay in one place hoping that something will happen." },
    { word: "Avancer", definition: "To move forward or make progress." },
    { word: "Balayer", definition: "To clean with a broom or move something aside." },
    { word: "Bénéficier", definition: "To gain or receive an advantage from something." },
    { word: "Bienveillance", definition: "The disposition to want the best for others." },
    { word: "Bouger", definition: "To move or change position." },
    { word: "Cacher", definition: "To put something out of sight." },
    { word: "Changer", definition: "To modify something, to make it different." },
    { word: "Choisir", definition: "To select an option from several alternatives." },
    { word: "Combattre", definition: "To fight against an opponent or a problem." },
    { word: "Communiquer", definition: "To share information with someone." },
    { word: "Complimenter", definition: "To say something nice about someone." },
    { word: "Connaître", definition: "To have experience or knowledge of something." },
    { word: "Construire", definition: "To create or assemble things to form something." },
    { word: "Continuer", definition: "To keep going with an action that was started." },
    { word: "Contrôler", definition: "To examine or manage something precisely." },
    { word: "Convenir", definition: "To be suitable or fit for a situation." },
    { word: "Courir", definition: "To move quickly on foot." },
    { word: "Créer", definition: "To make something new." },
    { word: "Décider", definition: "To choose an option after thinking about it." },
    { word: "Découvrir", definition: "To find out or learn something new." },
    { word: "Devoir", definition: "To be obligated to do something, or a task to accomplish." },
    { word: "Donner", definition: "To transfer something to someone." },
    { word: "Douter", definition: "To feel uncertain about something." },
    { word: "Écouter", definition: "To pay attention to sounds or words." },
    { word: "Écrire", definition: "To produce words on a surface with a tool." },
    { word: "Éduquer", definition: "To teach or train an individual." },
    { word: "Embrasser", definition: "To give a kiss or hug someone." },
    { word: "Encourager", definition: "To motivate someone to act positively." },
    { word: "Énergie", definition: "The capacity to perform tasks or to be active." },
    { word: "Éviter", definition: "To take action to avoid facing something." },
    { word: "Expliquer", definition: "To make something easier to understand." },
    { word: "Facile", definition: "Requiring little effort or difficulty." },
    { word: "Favoriser", definition: "To give someone or something an advantage." },
    { word: "Fermer", definition: "To put something in a state where it cannot be opened." },
    { word: "Fixer", definition: "To place something in a stable position." },
    { word: "Flatter", definition: "To excessively praise someone to please them." },
    { word: "Frapper", definition: "To strike something with force." },
    { word: "Gagner", definition: "To win a prize or benefit after effort." },
    { word: "Garder", definition: "To keep something in place or save it." },
    { word: "Grandir", definition: "To become larger, mature, or evolve." },
    { word: "Hésiter", definition: "To lack decision or assurance before acting." },
    { word: "Imaginer", definition: "To mentally conceive something that doesn't exist yet." },
    { word: "Imiter", definition: "To copy someone's actions or traits." },
    { word: "Innover", definition: "To introduce new ideas, methods, or products." },
    { word: "Jouer", definition: "To engage in recreational or sporting activity." },
    { word: "Joindre", definition: "To add, unite, or connect things together." },
    { word: "Juger", definition: "To evaluate or form an opinion about something or someone." },
    { word: "Juger", definition: "To estimate or make a decision about a topic." },
    { word: "Lancer", definition: "To throw something with force." },
    { word: "Lier", definition: "To connect, tie, or attach two things together." },
    { word: "Lire", definition: "To decode words and understand their meaning." },
    { word: "Manger", definition: "To consume food to nourish the body." },
    { word: "Marcher", definition: "To move on foot." },
    { word: "Maudire", definition: "To wish harm or misfortune upon someone." },
    { word: "Mélanger", definition: "To combine different substances or elements." },
    { word: "Mettre", definition: "To place something in a designated spot." },
    { word: "Mesurer", definition: "To evaluate the size, quantity, or distance of something." },
    { word: "Mouiller", definition: "To make something wet or damp." },
    { word: "Nager", definition: "To move in water using arms and legs." },
    { word: "Nourrir", definition: "To provide food to someone or something." },
    { word: "Oser", definition: "To have the courage to do something." },
    { word: "Obliger", definition: "To force or require someone to do something." },
    { word: "Offrir", definition: "To give something generously." },
    { word: "Oublier", definition: "To stop remembering something." },
    { word: "Parler", definition: "To exchange words or ideas with someone." },
    { word: "Participer", definition: "To take part in an activity or event." },
    { word: "Passer", definition: "To move from one place to another or from one time to another." },
    { word: "Perdre", definition: "To no longer have something that was once possessed." },
    { word: "Périr", definition: "To die or disappear tragically." },
    { word: "Plaisir", definition: "A sensation of enjoyment or satisfaction." },
    { word: "Plier", definition: "To bend something in two or more parts." },
    { word: "Porter", definition: "To carry something from one place to another." },
    { word: "Prendre", definition: "To seize or take possession of something." },
    { word: "Présenter", definition: "To introduce or display something to someone." },
    { word: "Prêter", definition: "To lend something to someone for a limited time." },
    { word: "Promettre", definition: "To commit to doing something in the future." },
    { word: "Protéger", definition: "To keep something safe from harm." },
    { word: "Raconter", definition: "To tell a story or describe an event." },
    { word: "Rassembler", definition: "To bring together people or things." },
    { word: "Rater", definition: "To fail to achieve something." },
    { word: "Réagir", definition: "To respond to a situation or stimulus." },
    { word: "Regarder", definition: "To observe or focus your gaze on something." },
    { word: "Réparer", definition: "To fix something that is broken or damaged." },
    { word: "Répéter", definition: "To do something again after it has been done already." },
    { word: "Respecter", definition: "To treat someone or something with consideration." },
    { word: "Réussir", definition: "To accomplish something successfully." }
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


