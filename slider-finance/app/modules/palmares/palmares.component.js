"use strict";
var data_service_1 = require("../../modules/services/data.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Palmares Page';
        this.palmaresList = [];
    }
    PalmaresComponent.prototype.ngOnInit = function () {
        //console.log(this.dataService.url)
        var base = this;
        this.dataService.getPalmares()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            for (var i = 0; i < 5; i++) {
                base.palmaresList.unshift(loaded[i]);
            }
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(base.palmaresList);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'palmares',
        templateUrl: 'modules/palmares/palmares.component.html',
        providers: [data_service_1.DataService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvRUFBaUU7QUFDakUsc0NBQTBFO0FBUzFFLElBQWEsaUJBQWlCO0lBRzVCLDJCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY1QyxTQUFJLEdBQVcsZUFBZSxDQUFBO1FBQzlCLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQTtJQUNhLENBQUM7SUFFaEQsb0NBQVEsR0FBUjtRQUNFLG1DQUFtQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTthQUMzQixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ1gsaUNBQWlDO1lBQy9CLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3hDLENBQUM7WUFDSCx1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDSjs7WUFFSTtJQUNOLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FJaUMsMEJBQVc7R0FIakMsaUJBQWlCLENBc0I3QjtBQXRCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWxtYXJlcyB9IGZyb20gJy4vcGFsbWFyZXMnXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvc2VydmljZXMvZGF0YS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWxtYXJlcycsXG4gIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9wYWxtYXJlcy9wYWxtYXJlcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGFsbWFyZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHRleHQ6IHN0cmluZyA9ICdQYWxtYXJlcyBQYWdlJ1xuICBwYWxtYXJlc0xpc3Q6IEFycmF5PFBhbG1hcmVzPiA9IFtdXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhU2VydmljZS51cmwpXG4gICAgbGV0IGJhc2UgPSB0aGlzXG4gICAgdGhpcy5kYXRhU2VydmljZS5nZXRQYWxtYXJlcygpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgICAgICAgICAgYmFzZS5wYWxtYXJlc0xpc3QudW5zaGlmdChsb2FkZWRbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhiYXNlLnBhbG1hcmVzTGlzdClcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=