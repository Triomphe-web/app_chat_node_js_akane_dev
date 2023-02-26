const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

app.set('view engine','ejs')
app
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
sequelize.initDB()
sequelize.synchronize()


// routes
require('./routes/index')(app)
require('./routes/Auth')(app)
require('./routes/SignUp')(app)
require('./routes/ApiAuth')(app)
require('./routes/ApiSign')(app)
require('./routes/Logout')(app)
require('./routes/ApiUpdateBioEtudiant')(app)
require('./routes/ApiUpdateBioProf')(app)
require('./routes/ApiGetBioEtud')(app)
require('./routes/ApiGetBioProf')(app)
require('./routes/ApiNiveauUpdate')(app)
require('./routes/ApiUpdateMailEtud')(app)
require('./routes/ApiUpdateMailProf')(app)


// todo : Lancement de l'application sur localhost:3000
app.listen(3000,(req,res)=>{
    console.log("Serveur heberger sur : http://localhost:3000");
})