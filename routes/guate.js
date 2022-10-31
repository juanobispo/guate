const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete, } = require('../controllers/guate');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id'),
],usuariosPut );


router.post('/',[
    check('codigo', 'El nombre es codigo'),
    check('nombreproyecto', 'El nombreproyecto'),
    check('monto', 'El monto'),

], usuariosPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id'),
 
],usuariosDelete );

module.exports = router;