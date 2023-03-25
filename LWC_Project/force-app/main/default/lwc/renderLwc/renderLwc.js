import { LightningElement } from 'lwc';
import template1 from './template1.html';
import parent from './renderLwc.html';

export default class RenderLwc extends LightningElement {
    toggleTemplate = false;

    render(){
        return this.toggleTemplate?template1:parent;
    }

    handleClick(){
        this.toggleTemplate = this.toggleTemplate?false:true;
    }


}