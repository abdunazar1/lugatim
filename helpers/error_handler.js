const errorHandler = (err, res) =>{
    console.log(err)
    res.status(400).send({ err: err.message})
}

module.exports = {
    errorHandler
}