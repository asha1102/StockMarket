import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: 'sideNav', component: SideNavComponent },
  {path:'home', component:HomeComponent},
  {path:'setting', component:SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
