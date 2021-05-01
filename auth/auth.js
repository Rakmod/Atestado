const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt')
const config =require('config')

const saltRounds=config.get('bcryptSaltRounds')

function generateToken(user){
	let token= jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'));
	return token;
}

function verifyToken(token){
	try{
		return jwt.verify(token,config.get('jwtPrivateKey'));//return decoded token
	}catch(err){
		console.log(`error in decoding jwt, ${err}`);
	}
}

function validateUser(user){
	//to be done with dynamo
	console.log(`validating user ${user.username}`)
	// tmpoldpass=bcrypt.hashSync("asdasd",saltRounds);
	// bcrypt.compare(user.password,tmpoldpass,(err,res)=>{
	// 	if(res==true){
	// 		//user authenticated
	// 		console.log("user authenticated");
	// 	}
	// 	//user not authentication
	// });
}

function saveNewUser(user){
	hashAndSave(user);
}
function hashAndSave(user){
	bcrypt.hash(user.password,saltRounds,save(user));
}
function save(user){
	//db call
}

module.exports={generateToken,verifyToken,validateUser}
