const unknownRouteHandler = (req, res) => {
  res.status(404).json({
    error: 'Unknown Route',
  })
}

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  })
}

module.exports = {
  unknownRouteHandler,
  errorHandler,
}
