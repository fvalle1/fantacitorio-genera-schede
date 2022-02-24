var select = document.getElementById("giocatori");

for(var i = 0; i < giocatori.length; i++) {
    var opt = giocatori[i];
    var el = document.createElement("option");
    el.textContent = opt[1];
    el.value = opt[0];
    select.appendChild(el);
}

function update_punteggi(caller){
    console.log(caller.value)
    var found = giocatori.filter((g) => g[0] === caller.value)
    console.log(found)
    var score = document.getElementById(caller.id+"_score")
    score.value = (found.length !== 0)?found[0][1]:0
    fanfani()
}