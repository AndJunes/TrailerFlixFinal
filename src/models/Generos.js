module.exports = (sequelize, DataTypes) => {
    const Generos = sequelize.define('Generos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        tableName: 'generos',
        timestamps: false
    });

    Generos.associate = function(models) {
        Generos.hasMany(models.Trailers, {
            foreignKey: 'genero_id'
        });
    };

    return Generos;
};