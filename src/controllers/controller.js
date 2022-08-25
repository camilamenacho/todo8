import Dica from '../models/model.js'

const controller = (app, bd) => {
    app.get("/tips", (req, res) => {
        res.json({
            dica: bd[Math.floor(Math.random()*bd.length)]
        })
    })

    app.post("/create", (req, res) => {
        const body = req.body

        const novaDica = new Dica (bd.length, ...Object.values(body))
        bd.push(novaDica)
        res.json({
            msg:"dica inserida com sucesso",
        })
    })
}

export default controller

