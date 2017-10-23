"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'https://calm-thicket-38975.herokuapp.com/api';
    }
    /*pushData(data) {
      var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
            data.sick = 1
          else data.sick = 0
          return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
           { headers: headers }) .map(response => response.json());
    }*/
    DataService.prototype.getPalmares = function () {
        return this.http.get(this.url + "/palmares")
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getMarket = function () {
        return this.http.get(this.url + "/market")
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzQ0FBMkM7QUFDM0MsaUNBQStCO0FBQy9CLHNDQUF3RDtBQUV4RDtFQUNFO0FBRUYsSUFBYSxXQUFXO0lBRXRCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLDhDQUE4QyxDQUFBO0lBQzdELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILGlDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLEdBQUcsY0FBVyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxZQUFTLENBQUM7YUFDakMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsV0FBVyxDQXdCdkI7QUF4Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuLi8uLi9tb2R1bGVzL21hcmtldC9tYXJrZXQnO1xuaW1wb3J0IHsgUGFsbWFyZXMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3BhbG1hcmVzL3BhbG1hcmVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuLypjb25zdCBIdHRwID0gcmVxdWlyZSgnaHR0cCcpXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgdXJsOiBzdHJpbmdcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICB0aGlzLnVybCA9ICdodHRwczovL2NhbG0tdGhpY2tldC0zODk3NS5oZXJva3VhcHAuY29tL2FwaSdcbiAgfVxuXG4gIC8qcHVzaERhdGEoZGF0YSkge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGlmKGRhdGEudGVtcGVyYXR1cmUgPCAzNi41IHx8IGRhdGEudGVtcGVyYXR1cmUgPiAzNy41IHx8IGRhdGEuaGVhcnRiZWFyIDwgMTIwIClcbiAgICAgICAgICBkYXRhLnNpY2sgPSAxXG4gICAgICAgIGVsc2UgZGF0YS5zaWNrID0gMFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXRhLycsIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSovXG4gIGdldFBhbG1hcmVzKCk6IE9ic2VydmFibGU8UGFsbWFyZXNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9wYWxtYXJlc2ApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICB9XG5cbiAgZ2V0TWFya2V0KCk6IE9ic2VydmFibGU8TWFya2V0W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vbWFya2V0YClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cbn1cbiJdfQ==