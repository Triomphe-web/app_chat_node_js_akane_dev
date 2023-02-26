const {isEmail} = require('validator')
const { hash } = require('bcrypt')
const {etudiant, professeur} = require('../src/db/sequelize')
module.exports = (app)=>{
    app.post('/welcome',(req,res)=>{
        if (req.body.radio === 'etudiant') {  
            if (isEmail(req.body.mail) && (req.body.password.length > 7)) {
                hash(req.body.password, 12,(err,hash)=>{
                    etudiant.create({
                        nom : req.body.name,
                        email : req.body.mail,
                        niveau : req.body.niveau,
                        mot_de_passe : hash,
                        biographie : null,
                    })
                
                })
                res.render('../views/profile.ejs',{data : {
                    name : req.body.name, 
                    profil : req.body.radio,
                    email : req.body.mail,
                    niveau : req.body.niveau
                }})  
            }
            else{
                let erreur = "erreurForm"
                hash(erreur,12,(err,hash)=>{
                    res.redirect(`/sign_up?message=${hash}`)
                })
            }
        }
        else {
            if (isEmail(req.body.mail) && (req.body.password.length > 7)) {
                hash(req.body.password, 12,(err,hash)=>{
                    professeur.create({
                        nom : req.body.name,
                        email : req.body.mail,
                        mot_de_passe : hash,
                        biographie : null,
                    })
                
                })
                res.render('../views/profile.ejs',{data : {
                    name : req.body.name, 
                    profil : req.body.radio,
                    email : req.body.mail,
                }})    
            }
            else{
                let erreur = "erreurForm"
                hash(erreur,12,(err,hash)=>{
                    res.redirect(`/sign_up?message=${hash}`)
                })
            }
        }
        
    })
}