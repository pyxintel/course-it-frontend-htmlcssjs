const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3100

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const msgs = [
  { name: 'Pedro', email: 'pedro@gmail.com', message: 'Mensagem do Pedro.' },
  { name: 'João', email: 'joao@gmail.com', message: 'João disse alguma coisa.' },
  { name: 'Alice', email: 'alice@gmail.com', message: 'Nova mensagem de alice.' },
]

const courses = [
  { name: 'HTML', duration: 7 },
  { name: 'CSS', duration: 15 },
  { name: 'JS', duration: 20 },
]

app.get('/courses', (req, res) => {
  res.json(courses)
})

app.get('/message', (req, res) => {
  res.json(msgs)
})

app.post('/message', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})