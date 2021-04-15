import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

@NgModule({
    declarations:[FirstComponent,SecondComponent],
    imports:[BrowserModule],
    exports:[FirstComponent,SecondComponent],
    bootstrap:[FirstComponent]
})
export class SubModule{

}