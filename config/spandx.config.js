/*global module, process*/

const localhost = (process.env.PLATFORM === 'linux') ? 'localhost' : 'host.docker.internal';

exports.routes = {
    '/rhcs/remediations': { host: `http://${localhost}:8002` },
    '/insights/remediations': { host: `http://${localhost}:8002` },
    '/apps/remediations': { host: `http://${localhost}:8002` }
};
