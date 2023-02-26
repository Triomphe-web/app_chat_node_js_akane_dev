const { professeur } = require("../src/db/sequelize")
module.exports = (app) => {
    // todo : API de modification de adresse email etud 👌
    app.get('/api/set_email_prof/:user/:email',async (req,res)=>{
        const result = await professeur.update({
            email : req.params.email
        },
        {
            where : { nom : req.params.user}
        })
        res.json(result)
    })

}