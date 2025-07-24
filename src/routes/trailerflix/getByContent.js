const db = require('../../models/index');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  try {
    const searchTerm = req.params.content; // Cambiado de 'term' a 'content'
    
    if (!searchTerm || searchTerm.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Debe proporcionar un término de búsqueda'
      });
    }

    // Buscar trailers que contengan el término en el resumen (case-insensitive)
    const trailers = await db.Trailers.findAll({
      where: db.sequelize.where(
        db.sequelize.fn('LOWER', db.sequelize.col('resumen')),
        'LIKE',
        `%${searchTerm.toLowerCase()}%`
      ),
      include: [
        { 
          model: db.Generos,
          as: 'genero'
        },
        { 
          model: db.Categorias,
          as: 'categoria'
        },
        {
          model: db.Actores,
          as: 'actores',
          through: { attributes: [] }
        }
      ]
    });

    if (trailers.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: `No se encontraron trailers con el término "${searchTerm}" en el resumen` 
      });
    }

    // Devolver respuesta
    res.json({
      success: true,
      count: trailers.length,
      searchTerm: searchTerm,
      data: trailers
    });

  } catch (error) {
    console.error('Error en getByContent:', error);
    res.status(500).json({ 
      success: false,
      error: 'Error al buscar trailers por contenido',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};