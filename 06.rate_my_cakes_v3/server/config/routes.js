const Cakes = require('../controllers/cakesController.js');

module.exports = function(app){
    app.get('/cakes',               Cakes.getAll)
    app.get('/cakes/:id',           Cakes.show)

    app.post('/cakes',              Cakes.create)
    app.put('/cakes/:id',           Cakes.update)
    app.put('/cakes/:id/reviews',   Cakes.addReview)
    app.get('/cakes/:id/reviews/:reviewId',   Cakes.deleteReview)

    app.delete('/cakes/:id',        Cakes.destroy)
}