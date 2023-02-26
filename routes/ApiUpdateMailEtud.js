const { etudiant } = require("../src/db/sequelize")
module.exports = (app) => {
    // todo : API de modification de adresse email etud 👌
    app.get('/api/set_email_etud/:user/:email',async (req,res)=>{
        const result = await etudiant.update({
            email : req.params.email
        },
        {
            where : { nom : req.params.user}
        })
        res.json(result)
    })

}