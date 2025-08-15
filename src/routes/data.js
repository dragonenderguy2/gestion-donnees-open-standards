const express = require('express');
const router = express.Router();

// Exemple de route pour obtenir toutes les données
router.get('/', (req, res) => {
    res.json([{ id: 1, name: 'Donnée 1' }, { id: 2, name: 'Donnée 2' }]);
});

module.exports = router;