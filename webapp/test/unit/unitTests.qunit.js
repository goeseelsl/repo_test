/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"webide/lawrence_mii_plugin_test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});