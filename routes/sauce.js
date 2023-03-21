const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const sauceCtrl = require('../controllers/sauce');


router.post('/',auth, sauceCtrl.createSauce);

router.put('/:id',auth, sauceCtrl.modifySauce );

router.delete('/:id',auth, sauceCtrl.DeleteSauce);

router.get('/',auth, sauceCtrl.getAllSauce);

router.get('/:id',auth, sauceCtrl.getOnSauce );


module.exports = router;