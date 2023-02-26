const { professeur } = require("../src/db/sequelize")
module.exports = (app)=>{
    app.get('/api/welcome/get_biographie_etud/:user',async (req,res)=>{
        const result = await professeur.findOne({ where : { nom : req.params.user}})
        res.json(result) 
    })  
}