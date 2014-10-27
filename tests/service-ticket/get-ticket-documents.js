/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var config = require('../../test-config');

var api = require('../../index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

var temp = require('../../test-temp')(api);
exports.setup = temp.setupTicket.bind('get_ticket_documents test');

exports.get_ticket_documents = function (test) {
	var options = {
		SrServicerecID: temp.ticket.Id		// id of ticket (sr_service_recid)
	};

	api.action('GetTicketDocumentsAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    console.dir(result.GetTicketDocumentsAction.Documents);
		}
		test.done();
	});
};

exports.cleanup = temp.cleanup;