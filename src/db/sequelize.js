const { Sequelize, DataTypes } = require('sequelize')
const EtudiantModel = require('../models/etudiants')
const ProfesseurModel = require('../models/professeurs')
const sequelize = new Sequelize(
    'chat_box',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions : {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)
const initDB = ()=>{
    sequelize.authenticate()
    .then(_ =>{console.log("La connexion a la base de donnée a bien été etablie")})
    .catch(error =>{console.log(`Erreur de connexion : ${error}`)})
}
const etudiant = EtudiantModel(sequelize,DataTypes)
const professeur = ProfesseurModel(sequelize,DataTypes)

const synchronize = ()=>{
    sequelize.sync({force:false})
        .then(_=>console.log("La synchronisation a été etbalie"))
        .catch(error =>{console.log(`Erreur de connexion : ${error}`)})
}

module.exports = {initDB, synchronize, etudiant, professeur}