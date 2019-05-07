const db = require('../config/db.config.js');
const config = require('../config/config.js');
const ROLEs = config.ROLEs; 
const User = db.user;
const Role = db.role;

verifyIdentity = (req, res, next) => {
	let profileId = req.id;
	//verifies if there's any token on header
	//not working yet... should verify if victim id != profile id || if pro didnt accept the case - no access 
	if (!profileId){

		if(role_id === 1){
			return res.status(500).send({ 
				message: 'Não tem permissões para ver este perfil.' 
			});
		}else{
			return res.status(200).send({ 
				message: '' 
			});
		}
	
	}
	
	next();
	
}

const verifyPro = {};
verifyPro.verifyIdentity = verifyIdentity;

module.exports = verifyPro;