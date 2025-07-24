module.exports = (sequelize, DataTypes) => {
    const Categorias = sequelize.define('Categorias', {
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
        tableName: 'categorias',
        timestamps: false
    });

    Categorias.associate = function(models) {
        Categorias.hasMany(models.Trailers, {
            foreignKey: 'categoria_id'
        });
    };

    return Categorias;
};