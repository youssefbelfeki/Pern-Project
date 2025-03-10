const { signin, signup} = require('../controllers/auth.controllers')
const router = require('express').Router();

router
    .route('/api/auth/signup')
    .post(signup)
router
    .route('/api/auth/signin')
    .post(signin)

module.exports = router;


