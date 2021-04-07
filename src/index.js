const { Client } = require("discord.js");
const client = new Client();
const { token } = require("../config.json");


const requestOptions = {
  method: 'GET/POST',
  headers: {
    "authorization": "API_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({"server_count": 1500}); // Replace with the exact numbers.
};

fetch(URL, requestOptions)
  .then(response => response.text())
  .then(console.log)
  .catch(console.error);

client.login(token);
