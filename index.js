const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio')

// Init Twillio API
const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;
//const client = twilio(accountSid, authToken);
//const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/incoming', (req, res) => {
  //const twiml = new MessagingResponse();
  console.log(req.body)
});

app.post('/status', (req, res) => {
  console.log(req.body)
});

app.listen(3000, () => {
  console.log('server started');
});