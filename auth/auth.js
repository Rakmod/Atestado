const jwt = require('jsonwebtoken');
const config =require('config')


function generateToken(user){
	let token= jwt.sign({ _id: user.id }, config.get('jwtPrivateKey'));
	return token;
}

function validateUser(user){
	//to be done with dynamo
}