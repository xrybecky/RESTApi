/**
 * Created by rybec on 05.11.2017.
 */

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var routes = require('./api/routes/throwComputingRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
