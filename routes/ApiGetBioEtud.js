const { etudiant } = require("../src/db/sequelize")
module.exports = (app)=>{
    // todo : API de modification de biographie de l'étudiant
    app.get('/api/welcome/biographie_etud/:bio/:user',async (req,res)=>{
    await etudiant.update({
        biographie : req.params.bio
    },
    {
        where : { nom : req.params.user } 
    }) 
    res.json({success : 'yes'})  
})
}