const axios = require('axios').default;
const configs = require('../config');

async function getConfigs() {
    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v1/data/BulkSanitizedConfigArchives.json',
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { getConfigs };