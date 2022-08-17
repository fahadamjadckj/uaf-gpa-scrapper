const express = require('express')
const { unknownRouteHandler, errorHandler } = require('./middleware/middleware')
require('express-async-errors')
const getData = require('./utils/dataScraper')
const { sortBySemesters, gpaCalculator } = require('./utils/semesterCount')
const helmet = require('helmet')
const { student } = require('./data')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/results/:reg', async (req, res, next) => {
  const regNumber = req.params.reg
  const data = await getData(regNumber)
  const sorted = await sortBySemesters(data)
  res.send(sorted)
})

app.use(unknownRouteHandler)
// app.use(errorHandler)

module.exports = app
