import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/wiredemodecarator.getAccountList';

const columns = [
    {label : 'Name', fieldName : 'Name'},
    {label : 'Player record ID', fieldName:'Id'},
    {label:'First Name', fieldName:'First_Name__c'},
    {label: 'Last Name', fieldName:'Last_Name__c'},
    
];
export default class WireDemoComponent extends LightningElement {
    @track columns = columns;
   
    @track data = [];

    @wire(getAccountList)
    wiredAccounts({data, error}){
        if (data) {
            this.data = data;
        }
        else if(error){
            console.log("error occured");
        }
    }

}