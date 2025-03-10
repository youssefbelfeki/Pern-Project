const user = require('../db/models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    console.log("signup()")
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            success: false,
            message: "Username and Password are required"
        });
    }
    try {
        const foundUser = await user.findOne({
            where: { username },
        })
        if (foundUser) {
            return res.status(409).send({
                success: false,
                message: "Username already exists"
            });
        }
        const newUSer = await user.create({
            username: username,
            password: bcrypt.hashSync(password, 8)
        });

        const token = jwt.sign({ id: newUSer.id }, 'demo-secret', { expiresIn: 3600 })

        res.status(200).send({
            success: true,
            message: "User registered successfully",
            accessToken: token
        });

    }
    catch (error) {
        console.error("Error ", error)
        res.status(401).send({
            message: error.message
        });
    }
};

const signin = async (req, res) => {
    console.log("signin()")
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            success: false,
            message: "Username and Password are required"
        });
    }
    try {
        const foundUser = await user.findOne({
            where: { username }
        })

        if (!foundUser) {
            return res.status(401).send({
                success: false,
                message: "User Not found."
            });
        }
        const isValidPassword = bcrypt.compareSync(password, foundUser.password)

        if (!isValidPassword) {
            return res.status(401).send({
                success: false,
                message: "Password not valid."
            });
        }

        const token = jwt.sign({ id: foundUser.id }, 'demo-secret', { expiresIn: 3600 })

        res.status(200).send({
            success: true,
            message: "User logged in successfully",
            accessToken: token
        });
    }
    catch (err) {
        console.error("Error ", err)
        res.status(401).send({
            message: err.message
        });
    }
};

const verifySession = async (req, res) => {
    console.log("verifySession()")
    return res.status(200).send({
        success: true,
        message: "Authorized"
    });
}

module.exports =  {
    signup,
    signin,
    verifySession
};