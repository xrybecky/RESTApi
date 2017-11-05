/**
 * Created by rybec on 05.11.2017.
 */

'use strict';



exports.compute = function (req, res){
    var response = {};

    // handle errors
    if(req.params == null){
        response.error = 'Params error';
        return;
    }

    if(req.params.angle == null){
        response.error = "Param <<angle>> error";
        return;
    }

    if(req.params.speed == null){
        response.error = "Param <<speed>> error";
        return;
    }

    var initRadians = Basic.maths.toRad(req.params.angle);

    // compute maximal distance of throw
    var maxDistance = (Math.pow(req.params.speed, 2)/Basic.maths.gravity) * Math.sin(2*initRadians);

    response.meta = {
        speed : req.params.speed,
        angle : req.params.angle,
        distance : maxDistance
    };

    // compute trajectory & save to ArrayList
    var x = 0;
    var y = 0;
    var time = 0;
    var trajectory = [];

    while(x < maxDistance){

        x = req.params.speed * time * Math.cos(initRadians);
        y = (req.params.speed * time * Math.sin(initRadians)) - ((Basic.maths.gravity * Math.pow(time, 2))/2);

        if(y < 0){
            y = 0;
        }

        trajectory.push({
            time : time,
            x : x,
            y: y
        });

        time += 0.2;
    }

    response.trajectory = trajectory;

    res.json(trajectory);
};