import { Component, OnInit, Injectable } from "@angular/core";
import { }

@Component({
    moduleId: module.id,
    selector: "tk-sidedrawer-events",
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.css']
})
@Injectable()
export class SideDrawerEventsComponent implements OnInit {
    private _currentNotification: string;
    private _sideDrawerTransition: sideDrawerModule.DrawerTransitionBase;

    constructor(private _page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this._page.on("loaded", this.onLoaded, this);
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
    }

    public onLoaded(args) {
        this._sideDrawerTransition = new sideDrawerModule.PushTransition();
    }

    public get sideDrawerTransition(): sideDrawerModule.DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    public get currentNotification(): string {
        return this._currentNotification;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onDrawerOpening() {
        console.log("Drawer opening");
        this._currentNotification = "Drawer opening";
    }

    public onDrawerOpened() {
        console.log("Drawer opened");
        this._currentNotification = "Drawer opened";
    }

    public onDrawerClosing() {
        console.log("Drawer closing");
        this._currentNotification = "Drawer closing";
    }

    public onDrawerClosed() {
        console.log("Drawer closed");
        this._currentNotification = "Drawer closed";
    }
}