import { Palmares } from './palmares'
import { DataService } from '../../modules/services/data.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'palmares',
  templateUrl: 'modules/palmares/palmares.component.html',
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PalmaresComponent implements OnInit{
  text: string = 'Palmares Page'
  palmaresList: Array<Palmares> = []
  public isLoading:boolean = false
  constructor(private dataService: DataService) {}

  ngOnInit() {
    //console.log(this.dataService.url)
    let base = this
    this.isLoading = true
    this.dataService.getPalmares()
    
      .subscribe(loaded => {
            //this.palmaresList.push(element)
              for(let i = 0; i < 5; i++){
                base.palmaresList.unshift(loaded[i])
                this.isLoading = false
            }
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(base.palmaresList)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
