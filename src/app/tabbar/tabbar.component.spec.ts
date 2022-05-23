import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetTestService } from 'src/service/widget-test.service';
import { AppRoutingModule } from '../app-routing.module';

import { TabbarComponent } from './tabbar.component';

// for testing app

describe('TabbarComponent', () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;
  let widgetTestService: WidgetTestService;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              HttpClientTestingModule,
              RouterTestingModule,
              BrowserModule,
              AppRoutingModule,
              NgbModule,
              HttpClientModule,
          ],
          declarations: [
            TabbarComponent
          ],
          providers: [
              WidgetTestService
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      }).compileComponents();
  });

  beforeEach(() => {
      fixture = TestBed.createComponent(TabbarComponent);
      component = fixture.componentInstance;
      widgetTestService = TestBed.inject(WidgetTestService);
  });

  it('should create the app', () => {
      expect(component).toBeTruthy();
  });
});
