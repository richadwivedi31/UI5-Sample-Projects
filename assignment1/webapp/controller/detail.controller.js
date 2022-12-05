sap.ui.define([
    "sap/ui/core/mvc/Controller"
], 
function (Controller) {
    "use strict";

    return Controller.extend("assignment1.controller.detail", { 
        /**
         * After calling navTo, the hash of the browser is updated & will get an event on the DetailController
         * here we will extract the objectId using the Event.getParameter function, then will bind the data to the view:
         */

         onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachMatched(this._onObjectMatched, this);
          },
          _onObjectMatched: function (oEvent) {
            /**
             * oEvent.getParameter(“arguments”): gets navigation
             */
            this.getView().bindElement({
                path: "/Products(" + oEvent.getParameter("arguments").productId + ")"
            });

          }
      
    });
});
