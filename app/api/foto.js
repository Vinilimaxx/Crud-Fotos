var mongoose = require('mongoose')

var api = {};


api.lista = function (req, res) {
    var model = mongoose.model('Foto');
    

    model
        .find({})
        .then(function(fotos){
            res.json(fotos)
        }, function(error){
            console.log(error)
            res.status(500).json(error)
        })
    };
//a
api.buscaPorId = function(req, res){
    // var model = mongoose.model('Foto');
    // model
    //     .findById(req.params.id)
    //     .then(function(foto){

    //     }, function(error) {
    //         console.log(error);

    //         res.status(500)
    //     })
};

api.removePorId = function(req, res){

};


api.adiciona = function(req, res){


};


api.atualiza = function(req,res){


};

module.exports = api;