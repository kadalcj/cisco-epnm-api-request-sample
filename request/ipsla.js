const axios = require('axios').default;
const configs = require('../config');

async function getIpsla() {
    // Example
    device = '192.168.0.1'; // Source Device
    targetIp = '192.168.0.2'; // Target Device
    vrfName = 'VRFNAME'; // VRF Name

    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v4/op/statisticsService/ipsla/metrics/stats.json?metrics=jitterforward,delayForward,lossforward&metricDataType=STATS&device=' + device + '&targetIp=' + targetIp + '&vrfName=' + vrfName,
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getIpsla };