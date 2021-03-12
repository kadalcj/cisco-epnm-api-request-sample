const axios = require('axios').default;
const configs = require('../config');

async function getAlarms() {
    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v1/data/Alarms.json',
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getAlarms };