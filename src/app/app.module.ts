import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { WidgetTestService } from 'src/service/widget-test.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabbarComponent } from './tabbar/tabbar.component';









@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  // provider del service per poter usarla in tutto l'app
  providers: [WidgetTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
