# Cisco EPNM API Request Sample App

## Requirement
- [**Node JS**](https://nodejs.org/en/download/)
  - [**Axios**](https://github.com/axios/axios)

## How to run the project:
1. Run this command to install the necessary update for app to run.
```bash
$ npm install
```
2. After that, run this command to run the app.
```bash
$ node app.js
```

## Info & Resources
Result you get from this API is default. You can modify the response by editing the URL. For example:

```js
...

async function getAlarms() {
    try {
        const res = await axios({
            method: 'get',
            url: configs.url + 'webacs/api/v1/data/Alarms.json&.sort=-alarmFoundAt',
            headers: configs.headers,
            auth: configs.auth
        });

        console.log(res.data)
    } catch(err) {
        console.log(err);
    }
}

...
```

Modify the url by adding `&.sort=-alarmFoundAt`, it will sort the data from the latest alarm by `alarmFoundAt` data. And there was many option you can apply to fit your use case.

You can read the [documentation](https://www.cisco.com/c/en/us/support/cloud-systems-management/evolved-programmable-network-epn-manager/products-documentation-roadmaps-list.html) of EPNM REST API for more details.
