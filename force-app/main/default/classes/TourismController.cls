public class TourismController {

    @AuraEnabled(cacheable = true)
    public static List<Tourism__c> showPlaces() {
        try{
            List<Tourism__c> placesList = [select Name, Description__c, Cost__c from tourism__c 
            order by Name];
            return placesList;
        }
        catch(System.Exception ex){
            System.debug(ex.getMessage());
            return null;
        }
    }
}