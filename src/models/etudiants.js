module.exports = (Sequelize, DataTypes)=>{
    return Sequelize.define('Etudiant',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        niveau : {
            type: DataTypes.STRING,
            allowNull: false
        },
        mot_de_passe : {
            type: DataTypes.STRING,
            allowNull: false
        },
        biographie : {
            type : DataTypes.STRING,
            allowNull : true
        },   
    },{
        timestamp: true,
        createdAt: 'created',
        updateAt: false
        
    });
}