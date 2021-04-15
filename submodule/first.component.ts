import { Component } from "@angular/core";

@Component({
    selector:'first-comp',
    template:'<h1>{{msg}}</h1>'
})
export class FirstComponent{
    msg:string="This is first component";
}