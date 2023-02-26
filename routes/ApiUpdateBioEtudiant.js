const { etudiant } = require("../src/db/sequelize")
module.exports = (app)=>{
    app.get('/api/welcome/get_biographie_etud/:user',async (req,res)=>{
        const result = await etudiant.findOne({ where : { nom : req.params.user}})
        res.json(result) 
    })  
}