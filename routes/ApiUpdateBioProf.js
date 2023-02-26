const { professeur } = require("../src/db/sequelize")
module.exports = (app)=>{
    // todo : API de modification de biographie de prof
    app.get('/api/welcome/biographie_prof/:bio/:user',async (req,res)=>{
        await professeur.update({
            biographie : req.params.bio
        },
        {
            where : { nom : req.params.user } 
        }) 
        res.json({success : 'yes'}) 
    }) 
}