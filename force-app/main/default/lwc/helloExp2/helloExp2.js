import { LightningElement } from 'lwc';

export default class HelloExp2 extends LightningElement {

    firstName = '';
    lastName = '';
    
    handlechanges(event){
        const field = event.target.name;
        if(field === 'firstName'){
            this.firstName = event.target.value;
        }
        if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    get lowerCaseFullName(){
        return (this.firstName+' '+this.lastName).trim().toLowerCase();
    }
}