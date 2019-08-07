//main controller
const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;
const Role = db.role;
const States = db.states;
const Status = db.status;
const Help = db.help;
const Case = db.case;
const Message = db.message;

const Op = db.Sequelize.Op;



var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


//list of all states
exports.states = (req, res) => {
	States.findAll({
	 attributes: ['id', 'state']
	}
	)
		 .then( state => {
		  res.status(200).json({
			  "states": state
		  });
	  }).catch(err => {
		  res.status(500).json({
			  "description": "Não foram encontrados distritos.",
			  "error": err
		  });
	  })
  }
 
//list of civil status
  exports.status = (req, res) => {
	 Status.findAll({
	  attributes: ['id', 'civil_status']
	 }
	 )
		  .then( status => {
		   res.status(200).json({
			   "status": status
		   });
	   }).catch(err => {
		   res.status(500).json({
			   "description": "Não foram encontrados estados civis.",
			   "error": err
		   });
	   })
   }
  
 
//list of all help types available
 exports.helpType = (req, res) => {
	 Help.findAll({
	  attributes: ['id', 'help_type']
	 }
	 )
		  .then( help => {
		   res.status(200).json({
			   "help": help
		   });
	   }).catch(err => {
		   res.status(500).json({
			   "description": "Não foram encontrados tipos de ajuda.",
			   "error": err
		   });
	   })
   }
  
 

//register
exports.register = (req, res) => {
	// save new user to database
	console.log("A processar o registo....");

	User.create({
		//register - user input fields
		approved: "1",
		name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        status_id: req.body.status_id,
        profile_img: req.body.profile_img,
        document_img: req.body.document_img,
        role_id: req.body.role_id,
        phone: req.body.phone,
        state_id: req.body.state_id,
		password: bcrypt.hashSync(req.body.password, 8)
		

    })
    .then(user => {
		const createCase = user.id;
		if(user.role_id == 1 && req.body.help_type == 1){
			//creates new victim case
			Case.create({
				profile_id: createCase,
				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: 0,
				accepted_psy: null,
				accepted_by_law: null,
				accepted_by_psy: null
			}),

			res.status(200).json({
				"description": "Conta criada com sucesso!"
			})
		}
		if(user.role_id == 1 && req.body.help_type == 2){
			//creates new victim case
			Case.create({
				profile_id: createCase,
				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: null,
				accepted_psy: 0,
				accepted_by_law: null,
				accepted_by_psy: null
			}),
			res.status(200).json({
				"description": "Conta criada com sucesso!"
			})
		}
		if(user.role_id == 1 && req.body.help_type == 3){
			//creates new victim case
			Case.create({
				profile_id: createCase,
				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: 0,
				accepted_psy: 0,
				accepted_by_law: null,
				accepted_by_psy: null
			}),
			
			res.status(200).json({
				"description": "Conta criada com sucesso!"
			})
		}
		//message - account pro / admin
		if(user.role_id == 2 || user.role_id == 3){
			User.update({
				//set account pending if it's a pro account
				approved: "0"
			},
			{where: {id: user.id}}),
			res.status(200).json({
				"description": "Conta criada com sucesso!",
				"pending": "A sua encontra-se sob aprovação até validarmos os seus documentos. Assim que possível, será contactado(a) por email."
			})
		
		}

	})
	.catch(err => {
		res.status(500).send("Error -> " + err);
	})

}

//login
exports.login = (req, res) => {
	console.log("Login");
	
	User.findOne({
		where: {
            //check if username exists
			username: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('Username não encontrado.');
		}

        //compare input password with db password encrypted
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        //password validation
		if (!passwordIsValid) {
			return res.status(401).send({ 
				auth: false, 
				accessToken: null, 
				reason: "Palavra-passe incorrecta!" 
			});
		}

		//account approved check
		var accountApproval = user.approved
		if (accountApproval == 0) {
			return res.status(401).send({ 
				auth: false, 
				accessToken: null, 
				reason: "A sua conta encontra-se com aprovação. Assim que possível, será contactado por email." 
			});
		}
        
        //user's token
		var token = jwt.sign({ id: user.id }, config.secret, {
			// expires in 24 hours
			expiresIn: 86400 
		});
        
        //send token once login is valid
		res.status(200).send({ 
			auth: true, 
			accessToken: token, 
			id: user.id, 
			role_id: user.role_id 
		});
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}

//user profile
exports.profile = (req, res) => {
	User.getProfile(req, res);
}

//user edit profile
exports.editProfile = (req, res) => {
	// update data in database
	User.update({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			status_id: req.body.status_id,
			profile_img: req.body.profile_img,
			document_img: req.body.document_img,
			phone: req.body.phone,
			state_id: req.body.state_id,
			password: bcrypt.hashSync(req.body.password, 8)
		},
		{
			where: {id: req.params.id}
	})
    .then(

		res.status(200).json({
		"description": "Perfil guardado com sucesso!"
		})
	)

	.catch(err => {
		res.status(500).send("Error -> " + err);
	})

}

//info case by id
exports.case = (req, res) => {
	Case.getCase(req, res);
}

// edit case
exports.editCase = (req, res) => {
	
	Case.update({
        //register - user input fields
		description: req.body.description,
	},
	{where: {profile_id: req.params.id}}
	  
	)
    .then( user => {
		// needs more conditionals - if case is already accepted, user shouldnt be able to change the help_type
		// if(Case.accepted_law == 1 || Case.accepted_psy == 1){
		// 	res.status(403).json({
		// 		"description": "Não pode actualizar um caso já aceite!"
		// 		})
		// }
	
		//help type law
		if(req.body.help_type == 1){
			Case.update({

				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: 0,
				accepted_psy: null,
				accepted_by_law: null,
				accepted_by_psy: null
			},
			{where: {profile_id: req.params.id}})
		}

		//help type psy
		if(req.body.help_type == 2){
			Case.update({

				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: null,
				accepted_psy: 0,
				accepted_by_law: null,
				accepted_by_psy: null
			},
			{where: {profile_id: req.params.id}})
		}
		//help type both
		if(req.body.help_type == 3){
			Case.update({

				description: req.body.description,
				help_type: req.body.help_type,
				accepted_law: 0,
				accepted_psy: 0,
				accepted_by_law: null,
				accepted_by_psy: null
			},
			{where: {profile_id: req.params.id}})
		}
		res.status(200).json({
		"description": "Dados guardados com sucesso!"
		})
	})

	.catch(err => {
		res.status(500).send("Error -> " + err);
	})

}


//allows a pro law to accept a case with the help law or both 
exports.acceptCaseLaw = (req, res) => {
	
		Case.update({
			accepted_law: 1,
			accepted_by_law: req.body.id
		},
		{
			where: {profile_id: req.params.id}
		})
		.then( user => {
				res.status(200).json({
					"description": "Caso aceite com sucesso."
					})
			}
		)
		.catch(err => {
			res.status(500).send("Error -> " + err);
		})
	
}

//allows a pro psy to accept a case with the help psy or both 
exports.acceptCasePsy = (req, res) => {
	Case.update({
		accepted_psy: 1,
		accepted_by_psy: req.body.id
	},
	{
		where: {profile_id: req.params.id}
	})
	.then( user => {
			res.status(200).json({
				"description": "Caso aceite com sucesso."
				})
		}
	)
	.catch(err => {
		res.status(500).send("Error -> " + err);
	})

}

//all unaccepted cases - law or both 
exports.casesLaw = (req, res) => {
	Case.getunacceptedLaw(req, res);
}

//all unaccepted cases - psy or both 
exports.casesPsy = (req, res) => {
	Case.getunacceptedPsy(req, res);
}


//get all professionals that accepted victims case
exports.acceptedCasesUser = (req, res) => {
	Case.getacceptedCasesUser(req, res);
}

//get all accepted cases by professional id - role law
exports.acceptedCasesLaw = (req, res) => {
	Case.getacceptedCasesLaw(req, res);
}

//get all accepted cases by professional id - role psy
exports.acceptedCasesPsy = (req, res) => {
	Case.getacceptedCasesPsy(req, res);
}

//get all messages by case_id and pro_id
exports.caseMessages = (req, res) => {
	Message.getMessages(req, res);
}

// saves new message on database - by case_id and pro_id
exports.caseNewMessage = (req, res) => {
	Message.create({
		//register - user input fields
		case_id: req.params.id,
		pro_id: req.body.pro_id,
        user_id: req.params.id,
        replied_by: req.body.replied_by,
        reply: req.body.reply
    })
    .then(user => {
			res.status(200).json({
				"description": "Mensagem enviada com sucesso!"
			})
		})
	.catch(err => {
		res.status(500).send("Error -> " + err);
	})

}