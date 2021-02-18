# Cisco EPNM API Request Sample App
This app is a simple template to request API to Cisco EPNM, specifically the **REST API** protocol using **Node JS**. 

## Requirement
- [**Node JS**](https://nodejs.org/en/download/) - Node.js JavaScript runtime
  - [**Axios**](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

# Berfore you run the project:
There is file that you need to edit so the request can be perform. Open and edit `config.js` file like this:
```js
const url = 'https://ip-epnm/';     // Replace with the IP Address of EPNM Server

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const auth = {
    username: 'username-epnm',      // Replace with username of EPNM Server
    password: 'password-epnm'       // Replace with password of EPNM Server
};

...
```

## How to run the project:
1. Run this command to install the necessary update for app to run.
```bash
$ npm install
```
2. After that, run this command to run the app.
```bash
$ node app.js
```
*Note: This is only applied if you clone this repo. If you build from scartch, you need to init the node folder and install necessary library first.

## Info & Resources
### Trigger Specific Request
To trigger specific request, you can simply edit the `app.js` from this:
```js
...

// Run All
setImmediate(async function() {
    await alarms.getAlarms();               // GET Alarms
    await configurations.getConfigs();      // GET Bulk export sanitized configuration archives
    await cpuUtil.getCpuUtil();             // GET CPU Utilization Trend
    await memoryUtil.getMemoryUtil();       // GET Memory Utilization Trend
    await interfaceUtil.getInterfaceUtil(); // GET Interface Utilizations
    await ipsla.getIpsla();                 // GET IPSLA (ICMP JITTER) Probe Metric Data
});
```
To this:
```js
...

setImmediate(async function() {
    await alarms.getAlarms();               // GET Alarms
});
```
By doing that, you only trigger the GET Alarms request.

### Modify Result
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


### More
You can read the [documentation](https://developer.cisco.com/docs/epnm/#!a-brief-intro/the-epn-manager-developer-hub) of EPNM REST API for more details.
