import { Component, OnInit } from '@angular/core';
import { WidgetModelFinal } from 'src/model/widgetModel';
import { WidgetTestService } from 'src/service/widget-test.service';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css'],
})
export class TabbarComponent implements OnInit {
  dataResponse: any;
  tittle = 'WIdget Test';
  status: boolean = false;

  constructor(private widgetTestService: WidgetTestService) {}

  // per ricavare i dati del json per poter leggere direttamente 
  ngOnInit(): void {
    this.widgetTestService
      .getDataGlobalTable()
      .subscribe((response: WidgetModelFinal) => {
        console.log('globalTableResponse: ', response);
        this.dataResponse = response;
      });
  }
}






/* peccato che non è stato possible usare ngFor per ricavare i dati del json
che non funzionava*/

/*
<div class="wrapper container">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist" *ngFor="let data of dataResponse" (click)="status=!status">
            <button [ngClass]="status ? 'nav-link active' : 'nav-link'" [attr.id]="'nav-'+ data.title + '-tab'" data-bs-toggle="tab" [attr.data-bs-target]="'#nav-'+ data.title"
                type="button" role="tab" [attr.aria-controls]="'nav-' + data.title" aria-selected="true">{{data.title}}
            </button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"></div>
    </div>
</div>
*/
