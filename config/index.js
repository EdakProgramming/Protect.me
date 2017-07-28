//requiring the config folder to bring over the username and password from config.json
let configValues = require('./config');
//creating an object for the database connection for mlab and having this function avail
module.exports = {
	getDbConnectionString: () => {
		return `mongodb://${configValues.username}:${configValues.password}@ds147842.mlab.com:47842/nodetodoapp`;
	}
}
