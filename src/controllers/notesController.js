const db = require('../database/models');
module.exports = {

    index: function (req, res) {
        db.Nota.findAll().then(function (result) {
            res.render('index', {notas: result});
        })
    },

    edit: function (req, res) {
        let id = req.params.id;
        if(!id){
            res.send('No master, intentalo otra vez');
        }

        db.Nota.findAll({
            where: {
              id: id
            }
          }).then(function (result) {
            console.log(result);
            res.render('detail', {nota: result});
        });
    },

    update: function (req, res) {
        let id = req.params.id;
        if(!id){
            res.send('No master, intentalo otra vez');
        }

        let {title, message} = req.body;
        if(!title || !message){
            res.send('No master, intentalo otra vez');
        }

        db.Nota.update({
                titulo: title,
                texto: message
            },{
            where:{
                    id: id  
                }
            }    
        ).then(function () {
            res.redirect('/');
        })
        .catch(error=>{
            res.send('Fijate esto master:' + error.toString());
        });
    },

    create: function (req, res) {
        let {title, message} = req.body;
        if(!title || !message){
            res.send('No master, intentalo otra vez');
        }

        db.Nota.create({
            titulo: title,
            texto: message
        })
        .then( function () {
            res.redirect('/');
        })
        .catch(error=>{
            res.send('Fijate esto master:' + error.toString());
        });
    },

    delete: function (req, res) {
        let id = req.params.id;
        if(!id){
            res.send('No master, intentalo otra vez');
        }
       
        db.Nota.destroy( {
            where: { id: id}
        })
        .then(function () {
            res.redirect("/");
        })
        .catch(error=>{
            res.send('Fijate esto master:' + error.toString());
        });
    }

}