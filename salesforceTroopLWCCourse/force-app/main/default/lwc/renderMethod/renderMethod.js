import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedBtn='';
    render(){
        if(this.selectedBtn === 'Signin'){
            return signinTemplate;
        }else if(this.selectedBtn === 'Signup'){
            return signupTemplate;
        }else{
            return renderTemplate;
        }
        
    }

    handleClick(event){
        this.selectedBtn = event.target.label; 
    }

    submitHandler(event){
        console.log(`${event.target.label} Successfully!!`);
    }
}