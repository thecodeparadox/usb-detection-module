var deviceDetection = require('./deviceDetection');

deviceDetection.findDevices(function(err, devices) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(devices);
});
