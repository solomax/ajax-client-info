;(function (undefined) {

	'use strict';

	if (typeof(org_json) === 'undefined') {
		window.org_json = {
			extraInfo: function() {
				return {
					protocol: window.location.protocol
				};
			}
		};
	}
})();
