/**
 * Created by rybec on 05.11.2017.
 */

'use strict';
module.exports = function(app) {
    var throwComputing = require('../controllers/throwComputingController');

    // compute Routes
    app.route('/compute/:angle/:speed')
        .get(throwComputing.compute)
};
