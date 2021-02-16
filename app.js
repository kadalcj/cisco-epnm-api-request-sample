// Self Certificate
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

// Import
const alarms = require('./request/alarms');
const configurations = require('./request/configurations');
const cpuUtil = require('./request/cpuUtilization');
const memoryUtil = require('./request/memoryUtilization');
const interfaceUtil = require('./request/interfaceUtilization');
const ipsla = require('./request/ipsla');

// Run All
setImmediate(async function() {
    await alarms.getAlarms();
    await configurations.getConfigs();
    await cpuUtil.getCpuUtil();
    await memoryUtil.getMemoryUtil();
    await interfaceUtil.getInterfaceUtil();
    await ipsla.getIpsla();
});