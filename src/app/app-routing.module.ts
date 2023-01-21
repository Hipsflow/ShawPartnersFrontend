import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'users-page', component: UsersPageComponent},
  { path: 'user-details', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
