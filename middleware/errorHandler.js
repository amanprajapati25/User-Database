function errorHandler(req, err, res, next) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({ title: `${statusCode} error`, message: err.message })
}

module.exports = { errorHandler };