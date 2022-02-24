
# deputati

def is_capogruppo(deputat:str)->bool:
    capigruppo = ["serracchiani", "schullian", "molinari", "marin", "lollobrigida", "fornaro", "crippa", "boschi", "barelli"]
    surname = deputat.split(" ")[0]
    return surname in capigruppo

def is_presidende(deputat:str)->bool:
    return deputat.split(" ")[0] in ["fico", "casellati"]

out = open("listagiocatori.js", "w")
out.write("var giocatori = [\n")

with open("deputati.txt","r") as file:
    deputati = file.readlines()
    #deputat to be gender un-biased
    for deputat in deputati:
        deputat = deputat.replace("\n", "").lower()
        points = 2
        if is_presidende(deputat):
            points = 10
        if is_capogruppo(deputat):
            points = 3
        out.write(f"[\"{deputat}\", {points}],\n")

out.write("]\n")
out.close()