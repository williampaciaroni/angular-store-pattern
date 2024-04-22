import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/todos/todos.module').then((m) => m.TodosModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error) => {
      // See ContextGuard: if the received 'context' query param contains an invalid route, we redirect the user to the default route.
      console.error(error);
      void this.router.navigate(['']);
    };
  }
}
