const { etudiant } = require("../src/db/sequelize")
module.exports = (app)=>{
    // todo : API de modification de niveau de l'étudiant
    app.get('/api/set_niveau_etud/:user/:niveau',async (req,res)=>{
    const result = await etudiant.update({
        niveau : req.params.niveau
    },
    {
        where : { nom : req.params.user}
    })
    res.json(result)
})
}