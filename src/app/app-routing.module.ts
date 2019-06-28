import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutUsComponent}
=======
import { HomeComponent } from './home/home.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tester', component: TesterComponent}
>>>>>>> bd155fb8af69ae40a5a03f79624210ad14fe3cbe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
