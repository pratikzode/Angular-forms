import { Component } from "@angular/core";

@Component({
    selector:'second-comp',
    template:'<h1>{{msg}}</h1>'
})
export class SecondComponent{
    msg:string="This is second component";
}