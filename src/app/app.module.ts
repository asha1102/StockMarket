import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
   MatButtonToggleModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
