/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"project_es5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
