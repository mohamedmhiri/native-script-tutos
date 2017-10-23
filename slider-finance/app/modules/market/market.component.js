"use strict";
var data_service_1 = require("../../modules/services/data.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Market Page';
        this.marketList = [];
        this.isLoading = false;
    }
    PalmaresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        //console.log(this.dataService.url)
        var base = this;
        this.dataService.getMarket()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            base.marketList = loaded;
            _this.isLoading = false;
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.marketList[0].name);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'market',
        templateUrl: 'market/market.component.html',
        providers: [data_service_1.DataService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9FQUFpRTtBQUNqRSxzQ0FBMEU7QUFTMUUsSUFBYSxpQkFBaUI7SUFJNUIsMkJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDVDLFNBQUksR0FBVyxhQUFhLENBQUE7UUFDNUIsZUFBVSxHQUFrQixFQUFFLENBQUE7UUFDdkIsY0FBUyxHQUFXLEtBQUssQ0FBQTtJQUNlLENBQUM7SUFFaEQsb0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUN6QixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ1gsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFBO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLHVFQUF1RTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFDSjs7WUFFSTtJQUNOLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLaUMsMEJBQVc7R0FKakMsaUJBQWlCLENBd0I3QjtBQXhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuL21hcmtldCdcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcmtldCcsXG4gIHRlbXBsYXRlVXJsOiAnbWFya2V0L21hcmtldC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGFsbWFyZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHRleHQ6IHN0cmluZyA9ICdNYXJrZXQgUGFnZSdcbiAgbWFya2V0TGlzdDogQXJyYXk8TWFya2V0PiA9IFtdXG4gIHB1YmxpYyBpc0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFTZXJ2aWNlLnVybClcbiAgICBsZXQgYmFzZSA9IHRoaXNcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldE1hcmtldCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2goZWxlbWVudClcblxuICAgICAgICAgICAgYmFzZS5tYXJrZXRMaXN0ID0gbG9hZGVkXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmtldExpc3RbMF0ubmFtZSlcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=