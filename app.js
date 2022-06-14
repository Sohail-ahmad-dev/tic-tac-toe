var items = document.querySelectorAll(".toe-item")
var exist = document.querySelector(".toe-section")
var playerTurn = document.querySelector(".playerTurn span")
const winsLine = document.querySelector(".toe-section hr")
const curveLine = document.querySelector(".curveLine")
const winOverlay = document.querySelector(".innerWin")
const mainOverlay = document.querySelector(".winOverlay")
const winOverlayP1 = document.querySelector(".innerWin .circle")
const winOverlayP2 = document.querySelector(".innerWin .cross")

setTimeout(() => {
    winOverlay.style.width = 0
    winOverlay.style.height = 0
    mainOverlay.style.zIndex = 0
        // document.querySelector(".innerWin h5").style.display = "block"
}, 800)

function playerOne() {
    playerTurn.classList.remove("cross")
    playerTurn.classList.add("circle")
}
playerOne()

function playerTwo() {
    playerTurn.classList.remove("circle")
    playerTurn.classList.add("cross")
}

var count = 0

items.forEach((ele, i) => {

    ele.addEventListener("click", () => {
        increment(ele)
    })
})

function increment(fill) {
    setTimeout(() => {

        if (count % 2 != 0) {
            if (fill.firstElementChild) {
                exist.classList.add("exist")
                setTimeout(() => { exist.classList.remove("exist") }, 400)
            } else {
                count += 1
                fill.dataset.playerState = 2
                    // console.log(fill.dataset.playerState)
                fill.innerHTML = '<div class="cross"></div>'
                results()
                playerOne()
            }
        } else if (count % 2 == 0) {
            if (fill.firstElementChild) {
                exist.classList.add("exist")
                setTimeout(() => { exist.classList.remove("exist") }, 400)
                exist.classList.add("exist")
            } else {
                count += 1
                fill.dataset.playerState = 1
                    // console.log(fill.dataset.playerState)
                fill.innerHTML = '<div class="circle"></div>'
                results()
                playerTwo()
            }
        }
    }, 100)

}

function results() {
    var resultsCase = {
        case1: [],
        case2: [],
        case3: [],
        case4: [],
        case5: [],
        case6: [],
        case7: [],
        case8: []
    }
    var resultsCase2 = {
        case1: [],
        case2: [],
        case3: [],
        case4: [],
        case5: [],
        case6: [],
        case7: [],
        case8: []
    }
    items.forEach((ele, i) => {
        for (let a = 0; a <= 8; a++) {
            if (a == 0 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case1.push(ele.dataset.playerState);
                    resultsCase.case4.push(ele.dataset.playerState);
                    resultsCase.case7.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case1.push(ele.dataset.playerState);
                    resultsCase2.case4.push(ele.dataset.playerState);
                    resultsCase2.case7.push(ele.dataset.playerState);
                }
            } else if (a == 3 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case2.push(ele.dataset.playerState);
                    resultsCase.case4.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case2.push(ele.dataset.playerState);
                    resultsCase2.case4.push(ele.dataset.playerState);
                }
            } else if (a == 6 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case3.push(ele.dataset.playerState);
                    resultsCase.case4.push(ele.dataset.playerState);
                    resultsCase.case8.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case3.push(ele.dataset.playerState);
                    resultsCase2.case4.push(ele.dataset.playerState);
                    resultsCase2.case8.push(ele.dataset.playerState);
                }
            }
            if (a == 1 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case1.push(ele.dataset.playerState);
                    resultsCase.case5.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case1.push(ele.dataset.playerState);
                    resultsCase2.case5.push(ele.dataset.playerState);
                }
            } else if (a == 4 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case2.push(ele.dataset.playerState);
                    resultsCase.case5.push(ele.dataset.playerState);
                    resultsCase.case7.push(ele.dataset.playerState);
                    resultsCase.case8.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case2.push(ele.dataset.playerState);
                    resultsCase2.case5.push(ele.dataset.playerState);
                    resultsCase2.case7.push(ele.dataset.playerState);
                    resultsCase2.case8.push(ele.dataset.playerState);
                }
            } else if (a == 7 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case3.push(ele.dataset.playerState);
                    resultsCase.case5.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case3.push(ele.dataset.playerState);
                    resultsCase2.case5.push(ele.dataset.playerState);
                }
            }
            if (a == 2 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case1.push(ele.dataset.playerState);
                    resultsCase.case6.push(ele.dataset.playerState);
                    resultsCase.case8.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case1.push(ele.dataset.playerState);
                    resultsCase2.case6.push(ele.dataset.playerState);
                    resultsCase2.case8.push(ele.dataset.playerState);
                }
            } else if (a == 5 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case2.push(ele.dataset.playerState);
                    resultsCase.case6.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case2.push(ele.dataset.playerState);
                    resultsCase2.case6.push(ele.dataset.playerState);
                }
            } else if (a == 8 && a == i) {
                if (ele.dataset.playerState == 1) {
                    resultsCase.case3.push(ele.dataset.playerState);
                    resultsCase.case6.push(ele.dataset.playerState);
                    resultsCase.case7.push(ele.dataset.playerState);
                } else if (ele.dataset.playerState == 2) {
                    resultsCase2.case3.push(ele.dataset.playerState);
                    resultsCase2.case6.push(ele.dataset.playerState);
                    resultsCase2.case7.push(ele.dataset.playerState);
                }
            }
        }
    })

    if (resultsCase.case1.length !== 3 || resultsCase2.case1.length !== 3 || resultsCase.case2.length !== 3 || resultsCase2.case2.length !== 3 || resultsCase.case3.length !== 3 || resultsCase2.case3.length !== 3 || resultsCase.case4.length !== 3 || resultsCase2.case4.length !== 3 || resultsCase.case5.length !== 3 || resultsCase2.case5.length !== 3 || resultsCase.case6.length !== 3 || resultsCase2.case6.length !== 3 || resultsCase.case7.length !== 3 || resultsCase2.case7.length !== 3 || resultsCase.case8.length !== 3 || resultsCase2.case8.length !== 3) {
        if (count === 9) draw()
    }

    // Player 1 wins possibilities
    if (resultsCase.case1.length == 3 || resultsCase2.case1.length == 3) {
        winsLine.style.visibility = "visible"
        winsLine.style.top = "calc((100% / 3) / 2)"
        winsLine.style.width = "90%"
        if (resultsCase.case1.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case2.length == 3 || resultsCase2.case2.length == 3) {
        winsLine.style.visibility = "visible"
        winsLine.style.top = "calc(100% / 2)"
        winsLine.style.width = "90%"
        if (resultsCase.case2.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case3.length == 3 || resultsCase2.case3.length == 3) {
        winsLine.style.visibility = "visible"
        winsLine.style.top = "calc(100% - (100% / 6))"
        winsLine.style.width = "90%"
        if (resultsCase.case3.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case4.length == 3 || resultsCase2.case4.length == 3) {
        curveLine.classList.add("case4")
        if (resultsCase.case4.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case5.length == 3 || resultsCase2.case5.length == 3) {
        curveLine.classList.add("case5")
        if (resultsCase.case5.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case6.length == 3 || resultsCase2.case6.length == 3) {
        curveLine.classList.add("case6")
        if (resultsCase.case6.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case7.length == 3 || resultsCase2.case7.length == 3) {
        curveLine.style.width = "104%"
        if (resultsCase.case7.length == 3) {
            win1()
        } else {
            win2()
        }
    } else if (resultsCase.case8.length == 3 || resultsCase2.case8.length == 3) {
        curveLine.classList.add("case8")
        if (resultsCase.case8.length == 3) {
            win1()
        } else {
            win2()
        }
    }

}

var player1winRate = 0
var player2winRate = 0

function win1() {
    player1winRate += 1
    curveLine.style.borderColor = "#04C0B2"
    winsLine.style.borderColor = "#04C0B2"
    document.querySelector(".playerWins .p1").innerHTML = player1winRate
    setTimeout(() => {
        mainOverlay.style.zIndex = 9999999
        winOverlay.classList.add("dOverlay")
        setTimeout(() => {
            winOverlayP1.classList.add("dop1")
            document.querySelector(" .wonText ").classList.add("text")
            document.querySelector(".innerWin h5").style.display = "block"
        }, 300)
    }, 600)
}

function win2() {
    player2winRate += 1
    curveLine.style.borderColor = "#b766c0"
    winsLine.style.borderColor = "#b766c0"
    document.querySelector(".playerWins .p2").innerHTML = player2winRate
    setTimeout(() => {
        mainOverlay.style.zIndex = 9999999
        winOverlay.classList.add("dOverlay")
        setTimeout(() => {
            winOverlayP2.classList.add("dop1")
            document.querySelector(" .wonText ").classList.add("text")
            document.querySelector(".innerWin h5").style.display = "block"
        }, 300)
    }, 600)
}

function draw() {
    mainOverlay.style.zIndex = 9999999
    winOverlay.classList.add("dOverlay")
    setTimeout(() => {
        document.querySelector(" .wonText ").innerHTML = "Match Draw"
        document.querySelector(" .wonText ").style.display = "block"
        document.querySelector(".innerWin h5").style.display = "block"
    }, 300)

}


document.querySelector(".restart").addEventListener("click", () => {
    restart()
})

function restart() {
    count = 0
    if (winOverlayP1.classList.contains("dop1") || winOverlayP2.classList.contains("dop1")) {
        winOverlayP1.classList.remove("dop1")
        winOverlayP2.classList.remove("dop1")
    }
    if (curveLine.classList.contains("case4") || curveLine.classList.contains("case5") || curveLine.classList.contains("case6") || curveLine.classList.contains("case8")) {
        curveLine.classList.remove("case4")
        curveLine.classList.remove("case5")
        curveLine.classList.remove("case6")
        curveLine.classList.remove("case8")
    } else {
        curveLine.removeAttribute("style")
    }
    winOverlay.classList.remove("dOverlay")
    mainOverlay.style.zIndex = 0

    winsLine.style.visibility = "hidden"
    winsLine.style.width = 0
    winsLine.style.top = 0
    document.querySelector(" .wonText ").style.display = "none"
    document.querySelector(" .wonText ").classList.remove('text')
    document.querySelector(" .wonText ").innerHTML = "Won"

    playerOne()

    items.forEach((ele, i) => {
        ele.dataset.playerState = ""
        ele.innerHTML = ""
    })

}