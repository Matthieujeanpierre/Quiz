const form = document.querySelector('.form-quiz');
let tAbleau = [];
const reponses = ["a", "a", "c", "b"];
let emoji = ["✅", "❌", "👀", "🎉"];
let Verif = [];
let tableauResultAt = [];
const TitreRésultat = document.querySelector(".reponse-questions h3");
const aideResultat = document.querySelector(".aide");
const noteResultat = document.querySelector(".note");
const toutLesQuestions = document.querySelectorAll(".question-block");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i < 5; i++) {
        tableauResultAt.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tAbleau);

    verifTAb(tableauResultAt);
    tableauResultAt = [];
})

function verifTAb(tabResultAt) {
    for (let i = 0; i < 4; i++) {
        if (tabResultAt[i] === reponses[i]) {
            Verif.push(true);
        } else {
            Verif.push(false);
        }
    }
    // console.log(Verif);
    // Verif = [];

    AfficherResultat(Verif);
    couleurTab(Verif);
    Verif = [];
}

function AfficherResultat(tAbCheck) {

    const nbDeFautes = tAbCheck.filter(el => el !== true).length;
    console.log(nbDeFautes);

    switch (nbDeFautes) {
        case 0: TitreRésultat.innerText = " ✅ Bravo , c'est un sans faute ! ✅ ";
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
            break;
        case 1: TitreRésultat.innerText = "1 erreur , dommage ! 👀❌";
            aideResultat.innerText = '';
            noteResultat.innerText = '4/5';
            break;
        case 2: TitreRésultat.innerText = "2 erreur , dommage! 👀❌";
            aideResultat.innerText = '';
            noteResultat.innerText = '3/5';
            break;
        case 3: TitreRésultat.innerText = "3 erreur , dommage ! 👀❌";
            aideResultat.innerText = '';
            noteResultat.innerText = '2/5';
            break;
        case 3: TitreRésultat.innerText = "4 erreur , dommage ! 👀❌";
            aideResultat.innerText = '';
            noteResultat.innerText = '1/5';
            break;
        case 3: TitreRésultat.innerText = "5 erreur , dommage ! 👀❌";
            aideResultat.innerText = '';
            noteResultat.innerText = '0/5';
            break;

        default: "Woops, cAs innatendu.";
            break;
    }
}

function couleurTab(tabValBool) {
    for (let i = 0; i < tabValBool.length; i++) {
        if (tabValBool[i] === true) {
            toutLesQuestions[i].style.background = "lightgreen";
        } else {
            toutLesQuestions[i].style.background = "#ffb8b8";
            toutLesQuestions[i].classList.add('echec');


            setTimeout(() => {
                toutLesQuestions.classList.remove('echec');
            }, 500);
        }
    }

    toutLesQuestions.forEach(item => {
        item.addEventListener('click', () => {
            item.style.background = 'White';
        })
    })
}