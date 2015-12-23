'use strict';

module.exports = {
	db: {
		connection: {
	    	host: 'db_host',
			user: 'db_user',
			password: 'db_pass',
			database: 'db_name',
	    	charset: 'utf8'		
		},
		client: 'mysql',
		pool: {
			min: 0,
			max: 7
		}
    }
};