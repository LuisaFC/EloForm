var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
 
app.use(bodyParser.json());
app.use(cors())
 
const users = []

app.post('/', function (req, res, next) {
  console.log(req.body);
  const {nome} = req.body
  users.push(req.body);
  res.json({msg: `${nome} seus dados recebidos com sucesso`});

})

app.get('/', (req, res) => {
  return res.json(users)
})
 
app.listen(8080, function () {
  console.log('Starting server...')
})

           