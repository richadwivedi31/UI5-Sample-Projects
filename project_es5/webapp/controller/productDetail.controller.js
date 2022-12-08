sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("projectes5.controller.productDetail", {

        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("productDetail").attachMatched(this._onObjectMatched, this);
          },
          _onObjectMatched: function (oEvent) {

            this.getView().bindElement({
                path: "/ProductSet" + oEvent.getParameter("arguments").productId
            });
 
          },
          onNavPress: function(){
            history.go(-1);

          }
    });
});
