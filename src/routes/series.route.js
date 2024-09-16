const {Router} = require('express')
const seriesControllers = require('../controllers/series.controllers')
const {seriesMiddleware} = require('../middlewares')
const route = Router()



route.get('/series', seriesControllers.getAllSeries )

route.get('/series/:id', seriesMiddleware.validaExisteIdSerie,seriesControllers.getSerieById )

route.delete('/series/:id', seriesMiddleware.validaExisteIdSerie,seriesControllers.deleteById)

route.post('/series', seriesControllers.createSerie )


module.exports = route