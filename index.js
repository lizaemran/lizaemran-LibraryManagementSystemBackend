const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('./routes')
const port = process.env.PORT || 5000;

const app = express()
app.use(express.json({ limit: '5MB', extended: true})); // express.json is replacement for bodyparser , Include extra params {} if needed 
app.use(cors({
  origin: '*'
}));
app.use(helmet())
app.use("/api", routes);

// Routes goes here

app.listen(port, () => console.log(`Listening on port ${port}.`))