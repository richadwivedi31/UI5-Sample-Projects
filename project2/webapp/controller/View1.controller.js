 sap.ui.define(
    [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    ],
    function (Controller, MessageToast) {
        "use strict";
    
        return Controller.extend("project_es5.controller.View1", {
            // onInit: function () {
    
            // },
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
    
        