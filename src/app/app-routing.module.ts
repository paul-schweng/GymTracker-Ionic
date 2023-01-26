import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MainGuard} from "./guards/main.guard";
import {AuthGuard} from "./guards/auth.guard";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const routes: Routes = [
  {path: '', canActivate: [MainGuard], loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)},
  {path: 'auth', canActivate: [AuthGuard], loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)},

  //------------- IMPORTANT: this wildcard path must be the very last route!!! ------------------
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
