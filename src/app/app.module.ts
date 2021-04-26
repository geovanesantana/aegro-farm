import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';
import { FarmDetailComponent } from './farms/farm-detail/farm-detail.component';
import { FarmRegisterComponent } from './farms/farm-register/farm-register.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmListComponent,
    FarmDetailComponent,
    FarmRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
