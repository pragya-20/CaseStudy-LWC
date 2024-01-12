public class BookingController {
    @AuraEnabled
    public static String insertBooking(String custName, String custEmail, String custDestination, Integer custNOD, Date custStartDate, Integer custNOP){
        try {
            Tourism__c tObj = [select Id from Tourism__c where Name =:custDestination];
            Booking__c cb = new Booking__c();
            cb.Customer_Name__c	 = custName;
            cb.Customer_Email__c = custEmail;
            cb.Destination__c = tObj.Id;
            cb.No_of_Days__c = custNOD;
            cb.No_of_Persons__c = custNOP;
            cb.Starting_Date__c = custStartDate;

            Database.insert(cb);
            Booking__c postBk = [select Name from booking__c where Id = :cb.Id];
            return 'Thanks for booking with us, your booking id is: '+ postBk.Name;
            
        } catch (Exception ex) {
            System.debug(ex.getMessage());
            return ex.getMessage();
        }
    }

    @AuraEnabled
    public static List<Booking__c> showBookings(){
        try {
            List<Booking__c> bList = [select Name, Customer_name__c,Customer_Email__c,Destination__r.Name,Destination__r.Cost__c,No_of_Days__c,No_of_Persons__c,Starting_Date__c from Booking__c order by CreatedDate desc];
            return bList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}