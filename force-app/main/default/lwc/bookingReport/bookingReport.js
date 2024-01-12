import { LightningElement } from "lwc";
import showBookings from "@salesforce/apex/BookingController.showBookings";
// import {ShowToastEvent} from '@salesforce/platform';

export default class BookingReport extends LightningElement {
  bookingList = [];
  tabcols = [
    { fieldName: "Name", label: "Booking Id", type: "text" },
    { fieldName: "Customer_Name__c", label: "Customer Name", type: "text" },
    {
      fieldName: "dname",
      label: "Destination Name",
      type: "text"
    },
    { fieldName: "Customer_Email__c", label: "Customer Email", type: "email" },
    { fieldName: "No_of_Days__c", label: "Stay Duration", type: "number" },
    {
      fieldName: "No_of_Persons__c",
      label: "Number of Persons",
      type: "number"
    },
    { fieldName: "Starting_Date__c", label: " Trip Start Date", type: "date" },
    {
      fieldName: "bookingCost",
      label: "Trip Cost",
      type: "number"
    }
  ];

  renderedCallback() {
    showBookings()
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          result[i].dname = result[i].Destination__r.Name;
          result[i].bookingCost =
            result[i].Destination__r.Cost__c *
            result[i].No_of_Persons__c *
            result[i].No_of_Days__c;
        }
        this.bookingList = result;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   operateBookings(event){
  //     let rowId = event.detail.row.id;
  //     if(event.detail.action.name === "Edit"){
  //         let bookingEditPage = {type:"standard_recordpage, "}
  //     }
  //   }
}
