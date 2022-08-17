const express = require('express')
const { unknownRouteHandler, errorHandler } = require('./middleware/middleware')
require('express-async-errors')
const getData = require('./utils/dataScraper')
const semesterCount = require('./utils/semesterCount')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/results/:reg', async (req, res, next) => {
  const regNumber = req.params.reg
  const data = await getData(regNumber)
  const semCount = await semesterCount(data)
  data.push(semCount)
  res.send(data)
})

app.use(unknownRouteHandler)
app.use(errorHandler)

module.exports = app
