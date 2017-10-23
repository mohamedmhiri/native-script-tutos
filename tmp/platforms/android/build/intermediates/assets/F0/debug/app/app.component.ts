import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public colorList: Array<string>;
 
    constructor() {
        this.colorList = ["light", "stable", "balanced", "positive", "calm", "assertive"];
    }
 }
