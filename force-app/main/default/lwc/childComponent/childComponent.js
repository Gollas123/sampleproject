import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
 title = "Child Card";

@api itemName = 'Java latest edition';

@api handleChange(){
    this.itemName = "here the child variable value is changed by button click with the help of method using api decarator"
}
    
}