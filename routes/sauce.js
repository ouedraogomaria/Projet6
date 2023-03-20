const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');


router.post('/', sauceCtrl.createSauce);

router.put('/:id',sauceCtrl.modifySauce );

router.delete('/:id', sauceCtrl.DeleteSauce);

router.get('/', sauceCtrl.getAllSauce);

router.get('/:id', sauceCtrl.getOnSauce );


module.exports = router;