var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb+srv://configValues.uname:configValues.pwd@sampledb.zombh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    }
    
}