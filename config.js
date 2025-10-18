const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~1Ao0yJJS#2FbrP0rvoa4dvfDsVK8-nxKnb7RuXGICe9JlYvl6iuA'
};
