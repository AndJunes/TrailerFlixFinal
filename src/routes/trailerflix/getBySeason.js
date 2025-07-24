const db = require('../../models/index');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
  try {
    // Buscar series con más de 3 temporadas directamente
    const series = await db.Trailers.findAll({
      where: {
        temporadas: {
          [Op.gt]: 3 // Mayor que 3
        },
        categoria_id: 2 // Asumiendo que 2 es el ID de "Serie"
      },
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

    if (series.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron series con más de tres temporadas'
      });
    }

    res.json({
      success: true,
      count: series.length,
      data: series
    });

  } catch (error) {
    console.error('Error en getBySeason:', error);
    res.status(500).json({
      success: false,
      error: 'Error al buscar series',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};