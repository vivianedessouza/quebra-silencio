const db = require('../config/db.config.js');
const config = require('../config/config.js');
const ROLEs = config.ROLEs; 
const User = db.user;
const Case = db.case;
const Role = db.role;



checkDuplicateUserNameOrEmail = (req, res, next) => {
	// Check Username is already in use
	User.findOne({
		where: {
			username: req.body.username
		} 
	}).then(user => {
		if(user){
			res.status(400).send("Já há uma conta com este username. Por favor, escolha outro.");
			return;
		}
		
		// Check Email is already in use
		User.findOne({ 
			where: {
				email: req.body.email
			} 
		}).then(user => {
			if(user){
				res.status(400).send("Já há uma conta com este email.");
				return;
			}
				
			next();
		});
	});
}



const registerVerify = {};
registerVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;


module.exports = registerVerify;