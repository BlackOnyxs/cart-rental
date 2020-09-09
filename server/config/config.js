//================
// Port
//================
process.env.PORT = process.env.PORT || 3000;
//================
// Token expire
//================
process.env.TOKEN_EXP = '48h';
//================
// SEED auth
//================
process.env.SEED = process.env.SEED || 'this-is-the-develop-seed';
//================
// Environment
//================
process.env.NODE_ENV = process.env.NODE_ENV ||'dev';
//================
// Data base
//================
let urlDB;
if( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/car-rental';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;