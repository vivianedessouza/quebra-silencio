const verifyRegister = require('./verifyRegister');
const authJwt = require('./verifyJwtToken');
const config = require('../config/config.js');
const db = require('../config/db.config.js');


module.exports = function(app) {
    const user = require('../controller/user.js');

    //NOT AUTHENTICATED

    //INFORMATION FOR REGISTER FORM 

    //all portugal districts 
    app.get('/states', user.states);

     //civil status
    app.get('/status', user.status);

    //all types of help victim can get
    app.get('/help', user.helpType);


    //AUTHENTICATED

    //REGISTER & LOGIN

    app.post('/auth/register', [verifyRegister.checkDuplicateUserNameOrEmail], user.register);
    
	app.post('/auth/login', user.login);

    // ALL USERS

    //user profile
    app.get('/auth/user/:id', [authJwt.verifyToken], user.profile);
    
    //edit profile 
    app.post('/auth/user/:id', [authJwt.verifyToken, verifyRegister.checkDuplicateUserNameOrEmail], user.editProfile);

    //user case 
    app.get('/auth/case/:id', [authJwt.verifyToken], user.case);

    //edit info case
    app.post('/auth/case/:id', [authJwt.verifyToken], user.editCase);

    //VICTIM USERS
    //get professional data from the person who accepted their case - to be used as message header
    app.get('/auth/user/case/:id', [authJwt.verifyToken], user.acceptedCasesUser);


    //CASES
    //all cases not accepted yet
    app.get('/auth/law/cases', [authJwt.verifyToken], user.casesLaw);
    app.get('/auth/psy/cases', [authJwt.verifyToken], user.casesPsy);
    
    //accept cases
    app.post('/auth/law/case/:id', [authJwt.verifyToken], user.acceptCaseLaw);
    app.post('/auth/psy/case/:id', [authJwt.verifyToken], user.acceptCasePsy);

    //get info from accepted cases by professional id
    app.get('/auth/law/cases/:id', [authJwt.verifyToken], user.acceptedCasesLaw);
    app.get('/auth/psy/cases/:id', [authJwt.verifyToken], user.acceptedCasesPsy);


    //MESSAGES
    //get messages by case_id
    app.get('/auth/case/messages/:id', [authJwt.verifyToken], user.caseMessages);
    //post new message
    app.post('/auth/case/messages/:id', [authJwt.verifyToken], user.caseNewMessage);

}