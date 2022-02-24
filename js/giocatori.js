var select = document.getElementById("giocatori");

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt[0];
    el.value = opt[0];
    select.appendChild(el);
}