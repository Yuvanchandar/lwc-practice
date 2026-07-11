import { LightningElement } from 'lwc';

export default class ConditionalRendering2 extends LightningElement {

    detailsVisible = false;

    handlechange(event){
        this.detailsVisible = event.target.checked;
    }
}