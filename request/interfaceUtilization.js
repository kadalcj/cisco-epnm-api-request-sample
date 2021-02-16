const axios = require('axios').default;
const configs = require('../config');

// Parameters
// ipAddress, IP Address of the device
// range, Specifies the range of time (in hours). This field can contain values like 1,2,4,8,16,24,168(1week),336(2Week),720(1Month),8760(1Year)
// interfaceName, The interface name to get utilization of
// type, An optional parameter that specifies the requested utilization type. Possible values: percent, octets. By default, when not specified it return octets information

async function getInterfaceUtil() {
    // Example
    ipAddress = '192.168.0.1'; // Device IP
    range = '24'; // 24 Hours
    interfaceName = 'TenGigE0/0/0/01.0001'; // Interface Name
    type = 'percent'; // Type

    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v1/op/statisticsService/interface/util.json?ipAddress=' + ipAddress + '&range=' + range + '&ifName=' + interfaceName + '&type=' + type,
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getInterfaceUtil };