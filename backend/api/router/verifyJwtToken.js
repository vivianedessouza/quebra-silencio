const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');
const Role = db.role;
const User = db.user;


verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];
    //verifies if there's any token on header
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'Nenhum token fornecido.' 
		});
	}

    //provides auth error
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Erro a autenticar. Error -> ' + err 
				});
		}
		req.role_id = decoded.id;
		next();
	});
}


const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;