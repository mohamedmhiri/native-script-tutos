import { Market } from './market'
import { DataService } from '../../modules/services/data.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'market',
  templateUrl: 'market/market.component.html',
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PalmaresComponent implements OnInit{
  text: string = 'Market Page'
  marketList: Array<Market> = []
  public isLoading:boolean = false
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isLoading = true
    //console.log(this.dataService.url)
    let base = this

    this.dataService.getMarket()
      .subscribe(loaded => {
            //this.palmaresList.push(element)

            base.marketList = loaded
            this.isLoading = false
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(this.marketList[0].name)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
