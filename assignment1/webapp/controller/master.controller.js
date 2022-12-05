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

            // 1. First we have to implement a press handler on the ListItem
            onClickListItem: function(oEvent){

                 // 2. we will extract the current ID of the object pressed by the user on the list by using its bindingContext.
                 
                  //3. getSource: Returns the event provider on which the event was fired.
            
                 var clickedProductId=oEvent.getSource().getBindingContext().getProperty("ProductID");
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                 /** Since we want to navigate to the “object” route, 
                  * we need to supply the mandatory objectId parameter
                  * pass it to the navTo function: Navigates to a specific route defining a set of parameters
                  * The source is the list item that got pressed
                 */

                  //Routing :SAPUI5 offers hash-based navigation, 
                
                 oRouter.navTo("detail", {
                    productId:clickedProductId
                 });

                // code to open one simple Target page
                // oRouter.getTargets().display("Targetdetail");
            }


        });
    });
