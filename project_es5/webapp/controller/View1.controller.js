sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "../model/formatter" //doubt custom formatter not working

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast,formatter) {
        "use strict";

        return Controller.extend("projectes5.controller.View1", {
   // onInit: function () {
    
            // },

            formatter : formatter,
            onShowHello: function(){
                // MessageToast.show("Hello!! This is my first UI5 project");

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);

            }
        });
    });
