const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validationToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        console.log('tokenn', token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
            if (err) {
                res.status(401);
                throw new Error("Unathorised User")
            }
            req.user = decode.user;
            next();
        })

    }
    else {
        // No Authorization header or not in the expected format
        res.status(401);
        throw new Error("Unauthorized User");
    }

})


module.exports = validationToken