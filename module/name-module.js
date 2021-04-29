// available to any module whis require this 
//because of expors
const prasanna = 'prasanna';
const Rudrang = 'rudrang';
const Chirag = 'chirag';

module.exports = { prasanna, Rudrang, Chirag };

//only this module has acess to secret 
const secret = 'top-secret';
