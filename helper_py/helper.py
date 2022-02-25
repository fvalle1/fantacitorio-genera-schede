def is_capogruppo(deputat: str) -> bool:
    capigruppo = ["serracchiani", "schullian", "molinari", "marin",
                  "lollobrigida", "fornaro", "crippa", "boschi", "barelli","bernini","castellone","ciriani","depetris","faraone","malpezzi","romeo","unterberger"]
    surname = deputat.split(" ")[0]
    return surname in capigruppo


def is_presidende(deputat: str, parliament: list) -> bool:
    return deputat.split(" ")[0] in parliament


def senato(is_f):
    def wrapper(deputat):
        is_f(deputat, ["casellati"])
    return wrapper


def camera(is_f):
    def wrapper(deputat):
        is_f(deputat, ["camera"])
    return wrapper


is_presidende_senato = senato(is_presidende)
is_presidende_camera = camera(is_presidende)
