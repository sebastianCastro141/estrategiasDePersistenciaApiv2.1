const {series} = require('../controllers/series.controllers')
const middleware = {}
const validaExisteIdSerie = (req, res, next) =>{

    const id = req.params.id
    const serie = series.find(serie => serie.id == id)
    if (!serie)
        return res.status(404).json({ mensaje: `El ${id} no existe` })

    next()
}
middleware.validaExisteIdSerie = validaExisteIdSerie



module.exports = middleware