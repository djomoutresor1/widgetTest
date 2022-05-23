import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WidgetModelFinal } from 'src/model/widgetModel';

@Injectable({
  providedIn: 'root'
})
export class WidgetTestService {

  constructor(private http: HttpClient) {}

  public getDataGlobalTable() {
    return this.http.get<WidgetModelFinal>('../assets/data.json');
  }
}
