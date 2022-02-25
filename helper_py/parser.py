from helper import is_presidende_camera, is_presidende_senato, is_capogruppo

out = open("listagiocatori.js", "w")
out.write("var giocatori = [\n")

# deputat*
with open("deputati.txt","r") as file:
    deputati = file.readlines()
    #deputat to be gender un-biased
    for deputat in deputati:
        deputat = deputat.replace("\n", "").lower()
        points = 2
        if is_presidende_camera(deputat):
            points = 10
        if is_capogruppo(deputat):
            points = 3
        out.write(f"[\"{deputat}\", {points}],\n")

# senator*
with open("senatori.txt", "r") as file:
    deputati = file.readlines()
    #deputat to be gender un-biased
    for deputat in deputati:
        deputat = deputat.replace("\n", "").lower()
        points = 4
        if is_presidende_senato(deputat):
            points = 15
        if is_capogruppo(deputat):
            points = 5
        out.write(f"[\"{deputat}\", {points}],\n")

# ministr*
with open("ministri.txt", "r") as file:
    ministri = file.readlines()
    points = 30
    for ministr in ministri:
        ministr = ministr.replace("\n", "").lower()
        out.write(f"[\"{ministr}\", {points}],\n")

# sindac*
with open("sindaci.txt", "r") as file:
    sindaci = file.readlines()
    points = 20
    for sindac in sindaci:
        sindac = sindac.replace("\n", "").lower()
        out.write(f"[\"{sindac}\", {points}],\n")

# president*
with open("pres_regioni.txt", "r") as file:
    presidenti = file.readlines()
    points = 20
    for president in presidenti:
        president = president.replace("\n", "").lower()
        out.write(f"[\"{president}\", {points}],\n")

# leader
with open("leader.txt", "r") as file:
    leaders = file.readlines()
    points = 50
    for leader in leaders:
        leader = leader.replace("\n", "").lower()
        out.write(f"[\"{leader}\", {points}],\n")

out.write("]\n")
out.close()