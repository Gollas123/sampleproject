import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class FistComponent extends LightningElement {
     myfirstlwc = "suresh! Welcome to lightning web components";
     myfirstlwc1 = "Success!";
     myfirstlwc2 = "Error!";
    handleClick(){
      this.showToast(this.myfirstlwc1);
    }

    showToast(sample){
        const event = new ShowToastEvent({
            title:sample,
            message:'The data you want to display from toast event is successfully displayed.',
            variant:'success',
        })
        this.dispatchEvent(event);
    }
    handleClick1(){
        this.showToast1(this.myfirstlwc2);
      }
  
      showToast1(sample){
          const event = new ShowToastEvent({
              title:sample,
              message:'The data you want to display from toast event is failed display.',
              variant:'error',
          })
          this.dispatchEvent(event);
      }
}