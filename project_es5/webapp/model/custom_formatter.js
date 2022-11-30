sap.ui.define([], function() {
    "use strict";

    return {
        delivery: function(sMeasure,iWeight){
            var oResourceBundle=this.getView().getModel("i18n").getResourceBundle(), sResult="";
            if(sMeasure === "G") {
                iWeight = iWeight / 1000;
                }
            if (iWeight < 0.5) {
                sResult = oResourceBundle.getText("MailDelivery");
                
            } else if (iWeight < 5) {
            sResult = oResourceBundle.getText("ParcelDelivery");
            
            } else {
            sResult = oResourceBundle.getText("CarrierDelivery");
         
            }
            return sResult;
        }

    }
    
});