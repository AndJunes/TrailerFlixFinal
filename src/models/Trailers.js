module.exports = (sequelize, DataTypes) => {
    const Trailers = sequelize.define('Trailers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        poster: DataTypes.STRING(255),
        titulo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        resumen: DataTypes.TEXT,
        temporadas: DataTypes.STRING(50),
        duracion: DataTypes.STRING(50),
        trailer: DataTypes.STRING(255),
        // Definimos explícitamente las claves foráneas
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: true, // Permitimos nulos para SET NULL
            references: {
                model: 'categorias',
                key: 'id'
            }
        },
        genero_id: {
            type: DataTypes.INTEGER,
            allowNull: true, // Permitimos nulos para SET NULL
            references: {
                model: 'generos',
                key: 'id'
            }
        }
    }, {
        tableName: 'trailers',
        timestamps: false
    });

    Trailers.associate = function(models) {
        Trailers.belongsTo(models.Categorias, {
            foreignKey: {
                name: 'categoria_id',
                allowNull: true // Coincide con la definición del modelo
            },
            as: 'categoria',
            onDelete: 'SET NULL', // Asegúrate que coincida con tu política deseada
            onUpdate: 'CASCADE'
        });
        
        Trailers.belongsTo(models.Generos, {
            foreignKey: {
                name: 'genero_id',
                allowNull: true // Coincide con la definición del modelo
            },
            as: 'genero',
            onDelete: 'SET NULL', // Asegúrate que coincida con tu política deseada
            onUpdate: 'CASCADE'
        });

        Trailers.belongsToMany(models.Actores, {
            through: 'Reparto',
            foreignKey: 'trailerId',
            otherKey: 'actorId',
            as: 'actores'
        });
    };

    return Trailers;
};