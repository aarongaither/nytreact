const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev'));

const articleRoutes = require('./controllers/article.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get("/api/test", (req, res) => res.json({id:1, first:'hello', last:'world'}));
app.use('/api/saved', articleRoutes);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// database configuration with mongoose
mongoose.Promise = Promise;
mongoose.connect('mongodb://heroku_04vpf2zk:k5vmv91ljrbvjor3c1n7bijqk7@ds129024.mlab.com:29024/heroku_04vpf2zk');
const db = mongoose.connection;
db.on('error', error => console.log('Mongoose Error: ', error));
db.once('open', () => console.log('Mongoose connection successful.'));

// Starts the server to begin listening, and sockets!
// =============================================================
const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log("App listening on PORT " + port));
const io = require('socket.io').listen(server);

io.sockets.on('connection', socket => {
	console.log('A user connected...');
	socket.on('disconnect', () => console.log('A user disconnected.'));
	socket.on('refresh', msg => {
		console.log('refresh rcvd.')
		socket.broadcast.emit('refresh', msg)
	})
});
