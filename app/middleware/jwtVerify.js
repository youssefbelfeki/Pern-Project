
const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    console.log('verifyToken')
    const authheader = req.headers["authorization"];
    if(!authheader || !authheader.startsWith("Bearer ")) {
        return res.status(401).send({
            success: false,
            message: "Token is required"
        });
    }
    const token = authheader.split(" ")[1];
    jwt.verify(token, "demo-secret", (err, response) =>{
        if(err){
            return res.status(401).send({
                success: false,
                message: "Token is not Authorized"
            });
        }
        req.userId= response.id;
        next()
    })
};

module.exports = verifyToken;