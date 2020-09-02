const proxy = require('http-proxy-middleware');
module.exports = function(app) {
	app.use(proxy('/apis', {
		logLevel: 'debug',
		target: "http://64.227.95.227:8080/",
		changeOrigin: true,
		}));
};