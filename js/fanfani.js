const scores = [...document.getElementsByClassName("score-input")]
const total = document.getElementById("totale")

function fanfani() {
    var sum = 0
    scores.forEach((s) => sum += parseInt(s.value))
    total.innerHTML = sum
    if(sum > 150){
        total.classList.add("too-much")
    } else {
        total.classList.remove("too-much")
    }
}