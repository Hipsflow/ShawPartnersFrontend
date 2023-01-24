import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'users-page', component: UsersPageComponent},
  { path: 'user-details', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
       useHash: true,
       preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
