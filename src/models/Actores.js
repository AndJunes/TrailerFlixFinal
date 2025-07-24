module.exports = (sequelize, DataTypes) => {
    const Actores = sequelize.define('Actores', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombreCompleto: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: 'actores',
        timestamps: false
    });

    Actores.associate = function(models) {
        Actores.belongsToMany(models.Trailers, {
            through: 'Reparto',
            foreignKey: 'actorId',
            otherKey: 'trailerId',
            as: 'trailers'
        });
    };

    return Actores;
};