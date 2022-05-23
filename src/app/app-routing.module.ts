import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabbarComponent } from './tabbar/tabbar.component';

// single page aplication, la welcome page considerato comme TabbarComponent
const routes: Routes = [
  { path: '', component: TabbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
