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
            },

            onListItemSelected: function(oEvent){

                // receives the Event object from the framework. From this object, we can
                // get the control which has triggered the event by using oEvent.getSource().

                // var oSelectedItem = oEvent.getSource();
                // //From the control instance, we can now determine its own binding context
                // var oContext = oSelectedItem.getBindingContext();
                // var sPath = oContext.getPath();

                // //Get the panel instance from the view by its id:
                // var oProductDetailPanel=this.byId("panel1");

                // //Bind the panel to the path we have retrieved from the list element:
                // oProductDetailPanel.bindElement({path:sPath});

                // this.byId("panel1").setVisible(true);

                var clickedProductId=oEvent.getSource().getBindingContext().getPath().substring("/ProductSet".length);
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                oRouter.navTo("productDetail", {
                    productId:clickedProductId
                 });

            }
        });
    });
