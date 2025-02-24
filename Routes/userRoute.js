const express = require('express')
const { loginController, registerController } = require('../Controller/userController')

//router object
const router = express.Router()

//routers
//POST || LOGIN
router.post('/login', loginController)

//POST || SIGNUP
router.post('?register',registerController)

module.exports = router