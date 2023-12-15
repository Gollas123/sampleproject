import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   ptitle='Parent Card';

   handleClick(){
    this.template.querySelector("c-child-component").handleChange();
   }
}