const express = require('express')

const app = express()

const fillerHTML = '<h1>Node JS Application</h1><p>Welcome to Node.js!</p>'

app.get('/', (req, res) => {
  res.send(fillerHTML)
})

app.listen(8080, () => {
  console.log('Application is running on localhost:8080')
})