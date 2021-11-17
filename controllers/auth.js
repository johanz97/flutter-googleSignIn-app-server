const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');

const googleAuth = async (req, res = response) => {
    const token = req.body.token;
    if (!token) {
        return res.json({
            ok: false,
            msg: 'No existe token de acceso'
        });
    }

    const googleUser = await validarGoogleIdToken(token);

    if (!googleUser) {
        return res.status(400).json({
            ok: false
        });
    }

    res.json({
        ok: true,
        googleUser
    });
}

module.exports = {
    googleAuth
}