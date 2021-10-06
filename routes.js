const {Router} = require('express');
const {metodos} = require('./controllers');
const router = Router();


router.get('/login',metodos.login);

router.get('/user',metodos.ensureToken,metodos.user);

module.exports = router;
