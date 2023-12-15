import { LightningElement, track } from 'lwc';

export default class TrackDecaratorDemo extends LightningElement {
    dtitle = 'track decorator';

    @track fullName = {firstName:'', lastName:''};

    changeHandler(event){
        const field = event.target.name;

        if (field === "firstName") {
            this.fullName.firstName = event.target.value;
        }
        else if (field === "lastName") {
            this.fullName.lastName = event.target.value;
        }

    }

    

}