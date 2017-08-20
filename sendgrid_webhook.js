var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "asdsdadauiuo" }, function(err, tunnel) {
  console.log('LT running')
});