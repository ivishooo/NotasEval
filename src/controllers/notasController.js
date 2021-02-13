const db = require('../database/models/index');
module.exports = {

    index: function(req,res){
        db.Nota.findAll().then(function(notas){
            return res.render("index", {notas})
         })
    },

    edit: function (req, res) {
        db.Nota.findAll({
            where: {
              id: req.params.id
            }
          }).then(function (result) {
            res.render('detail', {nota: result});
        });
    },

    upload: function (req, res) {
        db.Nota.update({
                titulo: req.body.title,
                texto: req.body.message
            },{
            where:{
                    id: req.params.id
                }
            }    
        ).then(function () {
            res.redirect('/');
        })
    },

    create: function (req, res) {
                db.Nota.create({
            titulo: req.body.title,
            texto: req.body.message
        })
        .then( function () {
            res.redirect('/');
        })
    },

    delete: function (req, res) {
        db.Nota.destroy( {
            where: {id: req.params.id}
        })
        .then(function () {
            res.redirect("/");
        })
        .catch(error=>{
            res.send('Fijate esto master:' + error);
        });
    }

}