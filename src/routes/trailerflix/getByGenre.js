const db = require('../../models/index');

module.exports = async (req, res) => {
  try {
    // 1. Buscar el género por nombre (case insensitive para MySQL)
    const genero = await db.Generos.findOne({
      where: db.sequelize.where(
        db.sequelize.fn('LOWER', db.sequelize.col('nombre')),
        '=',
        req.params.genre.toLowerCase()
      )
    });

    if (!genero) {
      return res.status(404).json({ 
        success: false,
        message: `Género '${req.params.genre}' no encontrado` 
      });
    }

    // 2. Buscar trailers con relaciones
    const trailers = await db.Trailers.findAll({
      where: { genero_id: genero.id },
      include: [
        { 
          model: db.Generos,
          as: 'genero'
        }
      ]
    });

    if (trailers.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: `No hay trailers para el género '${req.params.genre}'` 
      });
    }

    // 3. Devolver respuesta exitosa
    res.json({
      success: true,
      count: trailers.length,
      data: trailers
    });

  } catch (error) {
    console.error('Error en getByGenre:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al buscar trailers por género',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};