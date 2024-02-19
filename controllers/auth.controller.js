//req lo que envia el usuario
//res lo que contestamos
export const register = (req, res) => {
    res.json({ ok: "Register" })
}

export const login = (req, res) => {
    res.json({ ok: "login" })
}
