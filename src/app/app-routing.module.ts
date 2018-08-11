import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app-components/home/home.component';
import { AboutComponent } from '@app-components/about/about.component';
import { ErrorComponent } from '@app-components/error/error.component';
import { AuthGuard } from '@app-core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'todo',
    loadChildren: '@app-routes/todo/todo.module#TodoModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent,
    data: { title: '404 Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
