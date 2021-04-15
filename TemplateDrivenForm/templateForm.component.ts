import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'templateform-comp',
  templateUrl: './templateForm.component.html'
  
})
export class TemplateFormComponent {
    onFormSubmit(userForm:NgForm):void{
        console.log(userForm.value);
        console.log("First Name="+userForm.controls['fname'].value);
        console.log("Last Name="+userForm.controls['lname'].value);
        console.log("Email="+userForm.controls['email'].value);
    }
    onReset(userForm:NgForm):void{
        userForm.reset();
    }
}
