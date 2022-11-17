sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sab.btp.project1.controller.View1", {
            onInit: function () {

            }
        });
    },
    function (Button, MessageToast) {
        "use strict";
    
        new Button({
            text: "Ready...",
            press: function () {
                MessageToast.show("Hello World!");
            }
        }).placeAt("content");
    
    });
// sap.ui.define([
// 	"sap/m/Button",
// 	"sap/m/MessageToast"
// ], function (Button, MessageToast) {
// 	"use strict";

// 	new Button({
// 		text: "Ready...",
// 		press: function () {
// 			MessageToast.show("Hello World!");
// 		}
// 	}).placeAt("content");

// });