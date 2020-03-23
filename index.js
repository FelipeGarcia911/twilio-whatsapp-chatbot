// General imports
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const uuid = require('uuid');

// Init Twillio API
const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_TOKEN;
const client = new twilio(accountSid, authToken);
const MessagingResponse = twilio.twiml.MessagingResponse;
const twiml = new MessagingResponse();

// Init DialogFlow
const DialogFlowClass = require('./DialogFlowClass');
const dialogFlowClass = new DialogFlowClass();

// Init Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/incoming', async (req, res) => {
  const sessionId = uuid.v4();
  const { Body = '', From = '' } = req.body;
  
  const response = await dialogFlowClass.sendTextMessageToDialogFlow(Body, sessionId);
});

app.post('/status', (req, res) => {
  console.log(req.body)
});

app.listen(3000, () => {
  console.log('server started');
});