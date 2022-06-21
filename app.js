const homeScreen = document.getElementById('home-screen')
const awayScreen = document.getElementById('away-screen')
const buttons = document.querySelectorAll('.btn')
let homeScore = 0
let awayScore = 0


buttons.forEach(button => button.addEventListener('click', scoreChange))

function scoreChange(e) {
    if((e.target).value === 'h1'){
        homeScore += 1
    }else if((e.target).value === 'h2'){
        homeScore += 2
    }else if((e.target).value === 'h3'){
        homeScore += 3
    }else if((e.target).value === 'a1'){
        awayScore += 1
    }else if((e.target).value === 'a2'){
        awayScore += 2
    }else if((e.target).value === 'a3'){
        awayScore += 3
    }
    updateScreen()
}

function updateScreen() {
    homeScreen.textContent = homeScore
    awayScreen.textContent = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    updateScreen()
}