sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("assignment1.controller.master", {
            // onInit: function () {

            // }

            onClickListItem: function(oEvent){
                var oRouter=sap.ui.UIComponent.getRouterFor(this);
                var productId=oEvent.getSource.getBindingContext.getProperty("ProductID");
                oRouter.navTo("detail",{
                   selected_productId : productId
                });
            }
        });
    });
