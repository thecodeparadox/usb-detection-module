function findDevices(cb) {
    var usbDetect = require('usb-detection');

    usbDetect.startMonitoring();

    usbDetect.find()
        .then(function(devices) {
            usbDetect.stopMonitoring();
            return cb(null, devices);
        })
        .catch(function(err) { 
            usbDetect.stopMonitoring();
            return cb(err, null);
        });
};

module.exports.findDevices = findDevices;
