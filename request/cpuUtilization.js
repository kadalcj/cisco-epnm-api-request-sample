const axios = require('axios').default;
const configs = require('../config');

// Parameters
// ipAddress, IP Address of the device
// range, Specifies the range of time (in hours). This field can contain values like 1,2,4,8,16,24,168(1week),336(2Week),720(1Month),8760(1Year)

async function getCpuUtil() {
    // Example
    ipAddress = '192.168.0.1'; // Device IP
    range = '24'; // 24 Hours

    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v4/op/statisticsService/device/cpuUtilTrend.json?ipAddress=' + ipAddress + '&range=' + range,
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getCpuUtil };