module.exports = (sequelize, DataTypes) => {
    const Reparto = sequelize.define('Reparto', {
        trailerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'trailers',
                key: 'id'
            }
        },
        actorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'actores',
                key: 'id'
            }
        }
    }, {
        tableName: 'reparto',
        timestamps: false
    });

    return Reparto;
};