import { Component, OnInit, Input } from "@angular/core";
import { Tracker } from "../tracker.model";

@Component({
    selector: 'app-time-tracking',
    templateUrl: './time-tracking.component.html',
    styleUrls: ['./time-tracking.component.css']
})

export class TimeTrackingComponent {

    constructor(){}

    @Input() title: string = "";
    @Input() image: string = "";
    @Input() hours: string = "";
    @Input() previous: string = "";
    @Input() color: string = "";

    ngOnInit(){

    }
}