const app = require('./app');
require('tls').DEFAULT_MIN_VERSION = 'TLSv1';
require('dotenv').config();
app.listen(process.env.PORT,(req,res)=>console.log(`escuchando en el puerto ${process.env.PORT}`));
