sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Filter, FilterOperator, formatter) {
        "use strict";

        return Controller.extend("projectes5.controller.View1", {
            // onInit: function () {

            // },

            formatter: formatter,
            onShowHello: function () {
                // MessageToast.show("Hello!! This is my first UI5 project");

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);

            },

            onFilterProducts: function (oEvent) {

                // build filter array, query from search box
                var aFilter = [], sQuery = oEvent.getParameter("query"),

                    // retrieve list control, whole list
                    oList = this.getView().byId("list0"),
                    // get binding for aggregation 'items'
                    oBinding = oList.getBinding("items");
                if (sQuery) {
                    aFilter.push(new Filter("ProductID", FilterOperator.Contains,
                        sQuery)); //doubt what's happening in this line?
                }
                // apply filter. an empty filter array simply removes the filter
                // which will make all entries visible again
                oBinding.filter(aFilter);
            }
        });
    });
