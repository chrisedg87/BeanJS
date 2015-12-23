'use strict';

module.exports = {
	db: {
		connection: {
	    	host: 'localhost',
			user: 'works_servers',
			password: 'iScada12',
			database: 'works_servers',
	    	charset: 'utf8'		
		},
		client: 'mysql',
		pool: {
			min: 0,
			max: 7
		}
    }
};