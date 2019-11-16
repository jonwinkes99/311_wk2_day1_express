
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const { users } = require('./state')

/* BEGIN - create routes here */
let counter = users.length;

app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.json( users );
  //console.log(`number of users: ${users}`)
});
app.get('/users/1',(req, res) => {
  return res.json(users[0])
});

app.post('/users', (req, res) => {
  let newUser = 
  {
    "_id": 6,
    "name": "Jon Winkles",
    "occupation": "Web developer"
  }
  users.push(newUser);
	res.json(users);
});

app.put('/users/1', (req, res) => {
  users[0].occupation = 'kung fu fighter';
  res.json(users[0])
});
app.delete('/users/1', (req, res) => {
  users.shift();
  res.send('deleted')
});
/* END - create routes here */
//----------------------------------------------
// app.post('/users', (req, res) => {
//   req.body(users);
// });

app.post('/users',(req, res) => {

  let newPerson = {
    "_id": counter,
    "name": "Chance Jones",
    "occupation": "Rap Artist"
  };

  users.push(newPerson);
  res.json(newPerson);
  console.log(req.body);
});

app.get('/users/:userId', (req, res) => {

});

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))