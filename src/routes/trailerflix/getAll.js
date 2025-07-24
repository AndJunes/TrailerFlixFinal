const db = require('../../models/index');

module.exports = async (req, res) => {
    try {
        const trailers = await db.Trailers.findAll({
            include: [{ all: true }] 
        });
        res.json(trailers);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar trailers' });
    }
};