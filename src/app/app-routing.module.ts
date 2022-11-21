import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BloggersComponent } from './componentes/bloggers/bloggers.component';

const routes: Routes = [
  {
    path: 'blogger',
    component: BloggersComponent, // another child route component that the router renders
  },
  {
    path: '',
    component: AppComponent, // another child route component that the router renders
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
