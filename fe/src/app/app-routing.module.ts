import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HomeProComponent} from "./home-pro/home-pro.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ManageComponent} from "./manage/manage.component";
import {AboutComponent} from "./about/about.component";
import {HomeModule} from "./home/home.module";
import {AppModule} from "./app.module";
import {AboutModule} from "./about/about.module";
import {HomeProModule} from "./home-pro/home-pro.module";
import {ManageModule} from "./manage/manage.module";

export enum RoutePathEnum {
  HOME='home',
  HOME_PRO='home-pro',
  MANAGE='manage',
  ABOUT='about'
}

const routes: Routes = [
  {path: RoutePathEnum.HOME, component: HomeComponent},
  {path: RoutePathEnum.HOME_PRO, component: HomeProComponent},
  {path: RoutePathEnum.MANAGE, component: ManageComponent},
  {path: RoutePathEnum.ABOUT, component: AboutComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, AboutModule, HomeProModule, ManageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
