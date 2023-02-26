const {compare, hash} = require('bcrypt')
const {etudiant, professeur} = require('../src/db/sequelize')

module.exports = (app)=>{
    app.post('/welcomes',async (req,res)=>{
        if (req.body.radio === 'etudiant') {
            let result = await etudiant.findOne({ where : { email : req.body.mail}})
            result = JSON.stringify(result)
            if (result === 'null') {
                let erreur = "identifiant"
                hash(erreur,12,(err,hash)=>{
                    res.redirect(`/auth?message=${hash}`)
                })
            }
            else{
                let result_obj = JSON.parse(result)
                compare(req.body.pass, result_obj.mot_de_passe,(err,resulat)=>{
                    if (resulat) {
                        res.render('../views/profile.ejs',{data : {
                            name : result_obj.nom, 
                            profil : req.body.radio,
                            email : result_obj.email,
                            niveau : result_obj.niveau
                        }})
                    }
                    else{
                        let erreur = "motdepasse"
                        hash(erreur,12,(err,hash)=>{
                            res.redirect(`/auth?message=${hash}`)
                        }) 
                    }
                })
                
            }    
        }
        else{
            let result = await professeur.findOne({ where : { email : req.body.mail}})
            result = JSON.stringify(result)
            if (result === 'null') {
                let erreur = "identifiant"
                hash(erreur,12,(err,hash)=>{
                    res.redirect(`/auth?message=${hash}`)
                })
            }
            else{
                let result_obj = JSON.parse(result)
                compare(req.body.pass, result_obj.mot_de_passe,(err,resulat)=>{
                    if (resulat) {
                        res.render('../views/profile.ejs',{data : {
                            name : result_obj.nom, 
                            profil : req.body.radio,
                            email : result_obj.email,
                        }})
                    }
                    else{
                        let erreur = "motdepasse"
                        hash(erreur,12,(err,hash)=>{
                            res.redirect(`/auth?message=${hash}`)
                        })
                    }
                })
            }
        }
    })
}