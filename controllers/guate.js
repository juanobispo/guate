const { response, request } = require('express');

const Usuario = require('../models/guate');

const usuariosGet = async(req = request, res = response) => {
    
    const { limite = 100, desde = 0 } = req.query;
    const query = { status: true };
    const [ total, guate ] = await Promise.all([
        Usuario.countDocuments({}),
        Usuario.find({}).skip(Number(desde)).limit(Number(limite))

    ]);

    res.json({
        total,
        guate
    });
}

const usuariosPost = async(req, res = response) => {
    const { codigo,nombreproyecto, monto,paisqueejecuta,fecha,nombre} = req.body;
    const guate = new Usuario({ codigo, nombreproyecto, monto,paisqueejecuta,fecha,nombre});

    //Guardar en BD
    await guate.save();
    res.json({
        guate
    });
}

const usuariosPut = async(req, res = response) => {
    const { id } = req.params;
    //const { _id, codigo, nombreproyecto, monto, ...resto } = req.body;
    console.log();
    const usuario = await Usuario.findByIdAndUpdate( id, req.body);
    res.json(usuario);
}

const usuariosDelete = async(req, res = response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete( id );
    res.json(usuario);
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut,
}
