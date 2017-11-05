/**
 * Created by rybec on 05.11.2017.
 */

'use strict';

exports.compute = function (req, res) {

    res.json({ message: req.params.angle});

};