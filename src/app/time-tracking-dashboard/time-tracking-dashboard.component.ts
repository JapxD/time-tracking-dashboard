import { Component, OnInit} from "@angular/core";
import { Tracker } from "./tracker.model";

@Component({
    selector: 'app-time-tracking-dashboard',
    templateUrl: 'time-tracking-dashboard.component.html',
    styleUrls: ['time-tracking-dashboard.component.css']
})

export class TimeTrackingDashboardComponent{

    trackers: Tracker[] = [];

    constructor(){

    }

    ngOnInit(){
        this.trackers = [
            {
                title: "Work",
                image: "/assets/icon-work.svg",
                hours: "32hrs",
                previous: "Last week - 36hrs",
                color: "15, 100%, 70%"
            },
            {
                title: "Play",
                image: "/assets/icon-play.svg",
                hours: "10hrs",
                previous: "Last week - 8hrs",
                color: "195, 74%, 62%"
            },
            {
                title: "Study",
                image: "/assets/icon-study.svg",
                hours: "7hrs",
                previous: "Last week - 7hrs",
                color: "348, 100%, 68%"
            },
            {
                title: "Exercise",
                image: "/assets/icon-exercise.svg",
                hours: "4hrs",
                previous: "Last week - 5hrs",
                color: "145, 58%, 55%"
            },
            {
                title: "Social",
                image: "/assets/icon-social.svg",
                hours: "5hrs",
                previous: "Last week - 10hrs",
                color: "264, 64%, 52%"
            },
            {
                title: "Self Care",
                image: "/assets/icon-self-care.svg",
                hours: "2hrs",
                previous: "Last week - 2hrs",
                color: "43, 84%, 65%"
            },
        ];
    }
}