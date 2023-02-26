module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Professeur',{
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