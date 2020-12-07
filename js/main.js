const status = document.querySelector('h2')
let playActif = 1;
let joueurActif = 'x'
let gridLive = ['', '', '', '', '', '', '', '', ''];

const gagner = () => `Le joueur ${joueurActif} à gagné`

const egalite = () => 'Egalité'
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

status.innerHTML = tourJoueur()


const matchWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],

]

recommencer = () => {

    document.querySelectorAll('.case').forEach(cell => {
        cell.innerHTML = ''
    })

    gridLive = ['', '', '', '', '', '', '', '', ''];

    joueurActif = 'x'
    playActif = true
}

document.querySelector('.recommencer').addEventListener('click', recommencer)


gestionClickCase = function () {

    let dataCaseIndex = parseInt(this.dataset.case);

    if (gridLive[dataCaseIndex] != '' || !playActif) {
        return
    }

    gridLive[dataCaseIndex] = joueurActif
    this.innerHTML = joueurActif

    verifGain()
}

function verifGain() {
    let tourGagant = false;

    for (matchWin of matchWins) {
        let val1 = gridLive[matchWin[0]]
        let val2 = gridLive[matchWin[1]]
        let val3 = gridLive[matchWin[2]]

        if (val1 === "" || val2 === "" || val3 === "") {
            continue
        }
        if (val1 === val2 && val2 === val3) {
            tourGagant = true;
            break
        }
    }

    if (tourGagant) {
        status.innerHTML = gagner()
        playActif = false
        return
    }

    if (!gridLive.includes('')) {
        status.innerHTML = egalite()
        playActif = false
        return
    }

    joueurActif = joueurActif === 'x' ? 'o' : 'x'
    status.innerHTML = tourJoueur()



}
document.querySelectorAll('.case').forEach(cell => {
    cell.addEventListener('click', gestionClickCase);
})

