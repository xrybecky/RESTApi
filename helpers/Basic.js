/**
 * Created by rybec on 05.11.2017.
 */

Basic = {

    maths : {
        pi : 3.14159,
        gravity : 9.81275,

        toRad : function (degree) {
            return (degree * this.pi) / 180
        },

        toMeterPerSecs : function (speed) {
            return speed * (1000.0/3600.0);
        }
    }
};
