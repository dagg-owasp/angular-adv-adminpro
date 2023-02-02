import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Modules
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

// Components
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  // path: /auth AuthRouting
  // path: /dashboard PagesRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component:  NotfoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot ( routes ),
    PagesRoutingModule,
    AuthRoutingModule
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
