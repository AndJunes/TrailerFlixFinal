const express = require('express');
const router = express.Router();


const getAll = require('./trailerflix/getAll.js');
const getByGenre = require('./trailerflix/getByGenre.js');
const getByContent = require('./trailerflix/getByContent.js');
const getBySeason = require('./trailerflix/getBySeason.js');


router.get('/trailers', getAll);
router.get('/trailers/genre/:genre', getByGenre);
router.get('/trailers/content/:content', getByContent);
router.get('/trailers/series/mas-de-tres-temporadas', getBySeason); 


module.exports = router;